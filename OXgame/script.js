let config = {
    rowCount: 5,
    colCount: 5,
    cellToWin: 3,
    firstPlayer: {
        class: 'Xplayer',
        points: []
    }
}

let map = {

    // генерация карты
    generate() {
        let gameTop = document.querySelector('.gameTop');
        let map = document.createElement('div');
        map.classList.add('batleground');
        gameTop.appendChild(map);
        for (let row = 0; row < config.rowCount; row++) {
            let rowRend = document.createElement('div');
            rowRend.classList.add('batleground-row');
            map.appendChild(rowRend)
            for (let col = 0; col < config.colCount; col++) {
                this.createSell(rowRend, row, col)
            }
        }
    },

    // создание пустой ячейки
    createSell(rowRend, row, col) {
        let cellRend = document.createElement('div');
        cellRend.classList.add('batleground-cell');
        cellRend.setAttribute('row', row);
        cellRend.setAttribute('col', col);
        rowRend.appendChild(cellRend);
    }

}

let player = {
    active: config.firstPlayer,
    Xplayer: {
        class: 'Xplayer',
        points: []
    },
    Oplayer: {
        class: 'Oplayer',
        points: []
    },

    // метод записывает в массив игрока сделавшего ход новую точку
    move(element, point) {
        if (element.classList.contains('Xplayer')) {
            player.Xplayer.points.push(point)
        } else {
            player.Oplayer.points.push(point)
        }
    },

    // метод меняющий активного игрока
    change() {
        if (player.active.class == player.Xplayer.class) {
            player.active = player.Oplayer;
        } else {
            player.active = player.Xplayer;
        }
    },

    // проверка на победителя
    checkWiner(playerName, points) {

        // функция начинает проверять победителя, только если точек в массиве 
        // points больше или равно свойству конфига config.cellToWin
        if (points.length > config.cellToWin - 1) {

            let situatoins = [];
            let situation = [];
            let f = 1;
            let situationsGen = player.generateSituations(points, f, situation, situatoins, 0, 0);
            for ( let i = 0; i < situationsGen.length; i++) {
                if (player.checkCol(situationsGen[i]) || player.checkRow(situationsGen[i]) || player.checkDiagonal(situationsGen[i])) {
                    let allCell = document.querySelectorAll('.batleground-cell')
                    let winsCord = JSON.parse(JSON.stringify(situationsGen[i]))
                    for (let j = 0; j < allCell.length; j++) {
                        let x = allCell[j].getAttribute('col');
                        let o = allCell[j].getAttribute('row');
                        for (let z = 0; z < winsCord.length; z++){
                            if (parseInt(winsCord[z].x) == parseInt(x) && parseInt(winsCord[z].o) == parseInt(o)) {
                                allCell[j].classList.add('batleground-cell-win')
                            }
                        }
                        // здесь хотелось бы удалять слушатель объекта, чтобы кнопки по завершении игры становились не активными
                        // но у меня пока не получается вынести его (слушатель) отдельной функцией. 
                    }
                    break
                };
            }
        }

    },

    // генерируем массив возможных ситуаций для игрока. (это было тяжко)
    generateSituations(points, f, situation, situations, x, count) {

        // массив ситуации будет пополняться за счет переменной ситуация, которая содержит в себе точки, количество которых равно config.cellToWin. 
        for (let i = x; i < points.length-config.cellToWin+f; i++) {
            situation[f-1] = points[i];

            // если в массиве ситуации достаточно точек, записываем его в большой массив
            if (situation.length == config.cellToWin) {
                situations.push(JSON.parse(JSON.stringify(situation)));
                count++

            } else {
                x = i
                player.generateSituations(points, f+1, situation, situations, x+1, count)
            }; 
            if (i == points.length-config.cellToWin+f-1) {
                f--;
                situation.pop();
            }
        };
        return situations

    },

    // проверка победы по горизонтали
    checkCol(points) {
        
        let per = JSON.parse(JSON.stringify(points[0].x));
        for (let i = 1; i < points.length; i++) {

            if (points[i].x != per) {
                return false
            };
        };
        let chekedPoints = JSON.parse(JSON.stringify(points))
        for (let i = 0; i < chekedPoints.length; i++){
            for (let j = i + 1; j < chekedPoints.length; j++) {
                if (chekedPoints[i].o > chekedPoints[j].o) {
                    let save = chekedPoints[i].o;
                    chekedPoints[i].o = chekedPoints[j].o;
                    chekedPoints[j].o = save;
                };
            };
        };
        for (let i = 0; i < chekedPoints.length - 1; i++) {
            if (chekedPoints[i].o != chekedPoints[i + 1].o - 1) {
                return false
            }
        }
        return true
    },

    // проверка победы по вертикали
    checkRow(points) {
        let chekedPoints = JSON.parse(JSON.stringify(points))
        let per = JSON.parse(JSON.stringify(points[0].o));
        for (let i = 0; i < chekedPoints.length; i++){
            for (let j = i + 1; j < chekedPoints.length; j++) {
                if (chekedPoints[i].x > chekedPoints[j].x) {
                    let save = chekedPoints[i].x;
                    chekedPoints[i].x = chekedPoints[j].x;
                    chekedPoints[j].x = save;
                };
            };
        };
        for (let i = 0; i < chekedPoints.length - 1; i++) {
            if (chekedPoints[i].x != chekedPoints[i + 1].x - 1) {
                return false
            }
        }
        for (let i = 1; i < chekedPoints.length; i++) {

            if (chekedPoints[i].o != per) {
                return false
            };
        };
        return true
    },

    // чек победы по диагоналям
    checkDiagonal(points) {
        let chekedPoints = JSON.parse(JSON.stringify(points))
        for (let i = 0; i < chekedPoints.length; i++){
            for (let j = i + 1; j < chekedPoints.length; j++) {
                if (chekedPoints[i].x > chekedPoints[j].x) {
                    let save = chekedPoints[i];
                    chekedPoints[i] = chekedPoints[j]
                    chekedPoints[j] = save;
                };
            };
        };
        let flag = 0; // 0 - ни на диагонали; 1 - на главной диагонали; 2 - на побочной диагонали
        for (let i = 0; i < chekedPoints.length - 1; i++) {
            if (parseInt(chekedPoints[i].x)+1 != parseInt(chekedPoints[i+1].x)) {

                return false
            }
            if (parseInt(chekedPoints[i].x)+parseInt(chekedPoints[i].o) == parseInt(chekedPoints[i+1].x)+parseInt(chekedPoints[i+1].o) && flag != 1) {
                flag = 2;
            } else if ((parseInt(chekedPoints[i].x) + parseInt(chekedPoints[i+1].o) == parseInt(chekedPoints[i].o) + parseInt(chekedPoints[i+1].x)) && (flag != 2)) {
                flag = 1;
            } else {
                flag = 0;
            }
            if (flag == 0){
                return false
            }

        }
        // оставил проверку на диагональ (побочную и главную) может пригодится ещё
        if (flag == 1 || flag == 2) {
            return true
        } else {
            return false
        }
        
    }
    
}

let game = {
    // ноукоментс)
    start() {
        player.Xplayer.points = [];
        player.Oplayer.points = [];

        let oldMap = document.querySelector('.batleground');

        if (oldMap) oldMap.remove();
        map.generate();
        player.active = config.firstPlayer;
        let elements = document.querySelectorAll('.batleground-cell');
        elements.forEach(element => {
            element.addEventListener('click', function() {
                if (!element.classList.contains('Xplayer') && !element.classList.contains('Oplayer')) {
                    element.classList.add(player.active.class);
                    let point = {
                        x: element.getAttribute('col'),
                        o: element.getAttribute('row')
                    }
                    player.move(element, point);
                    player.checkWiner(player.active.class, player.active.points);
                    player.change();
                }
            })
        });

    },
    moveClick() {
        if (!element.classList.contains('Xplayer') && !element.classList.contains('Oplayer')) {
            element.classList.add(player.active.class);
            let point = {
                x: element.getAttribute('col'),
                o: element.getAttribute('row')
            }
            player.move(element, point);
            player.checkWiner(player.active.class, player.active.points);
            player.change();
        }
    
    }
}

game.start()

let button = document.querySelector('.btn');
button.addEventListener('click', game.start);