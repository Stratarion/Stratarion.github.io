// перетаскиванивание окна настроек

(function () {
    var setupWindow = document.querySelector('.setup');
    var setupHandle = setupWindow.querySelector('.upload');


    setupHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };

    

    var dragged = false;

    var onMouseMove = function(moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var Shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        setupWindow.style.top = (setupWindow.offsetTop - Shift.y) + 'px';
        setupWindow.style.left = (setupWindow.offsetLeft - Shift.x) + 'px';
        
    };

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
            var onClickPreventDefault = function(evt) {
                evt.preventDefault();
                setupHandle.removeEventListener('click', onClickPreventDefault)
            };
            setupHandle.addEventListener('click', onClickPreventDefault);
        };

       
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    

    });

})();