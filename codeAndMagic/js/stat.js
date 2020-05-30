
//Размеры облака статистиики
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

//Координаты облака статистики
const CLOUD_X = 160;
const CLOUD_Y = 10;

//Координаты тени облака статистики
const CLOUD_SHADOW_X = 170;
const CLOUD_SHADOW_Y = 20;

//
const STATISTIC_HEIGHT = 150;
const STATISTIC_BAR_WIDTH = 40;

// Рендер облака статистики
function renderStatistics(ctx, names, times) {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT); 

    ctx.fillStyle = '#fff';
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура, вы победили', 170, 30);
    ctx.fillText('Список результатов:', 170, 50);

    // Ищем максимальный результат
    let topResult = findMaxResult(names, times);

    // Находим высоты столбцов (colsHeight)
    let colsHeight = []
    for (let i = 0; i < times.length; i++) {
        colsHeight[i] = calcColHeight(times[i], topResult, STATISTIC_HEIGHT)
    }

    // Кординаты нала отрисовски статистики
    var xCol = 260;
    var yCol = 100;

    // Отрисовка колонок статистики
    for (let i = 0; i < times.length; i++) {
        if (names[i] == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            let x = Math.floor(Math.random() * 255);
            ctx.fillStyle = 'rgba(0, 0, ' + x + ', 1)';
        };
        renderColumn(ctx, xCol, yCol, colsHeight[i]);
        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.fillText(Math.floor(times[i]), xCol, yCol + STATISTIC_HEIGHT - colsHeight[i] - 10);
        ctx.fillText(names[i], xCol, yCol + STATISTIC_HEIGHT + 20);
        xCol +=60;
    }
}   

// Поиск максимального времени прохождения
function findMaxResult(names, times) {
    let max = times[0];
    for (let i = 1; i < names.length; i++) {
        if (times[i] > max) {
            max = times[i];
        };
    };
    return Math.floor(max);
}

// Высота 1 столбца
function calcColHeight(time, max, height) {
    let columHeight = Math.floor(time / max * height);
    return columHeight;
}

// Рендер колонки статистики
function renderColumn(ctx, x, y, height) {
    y += STATISTIC_HEIGHT - height;
    ctx.fillRect(x, y, STATISTIC_BAR_WIDTH, height);
}