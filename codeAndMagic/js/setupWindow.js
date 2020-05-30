
(function () {
var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');

var onSetupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closeSetup();
    };
};
var onOpenSetupEnterPress = function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closeSetup();
    };
};

var onCloseSetupEnterPress = function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openSetup();
    };
};

function openSetup() {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
    setupSubmit.addEventListener('click', closeSetup);
    setupSubmit.addEventListener('keydown', closeSetup);

    window.defaultSetupCoords = {
        x: setupWindow.offsetLeft,
        y: setupWindow.offsetTop
    };
    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('keydown', onCloseSetupEnterPress);

    

};
function closeSetup() {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    setupSubmit.removeEventListener('click', closeSetup);
    setupSubmit.removeEventListener('keydown', closeSetup);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', onCloseSetupEnterPress);

    setupWindow.style.top = defaultSetupCoords.y + 'px';
    setupWindow.style.left = defaultSetupCoords.x + 'px';3
};

var form = setupWindow.querySelector('.setup-wizard-form');
form.addEventListener('submit', function(evt) {
    window.upload(new FormData(form), function (response) {
        setupWindow.classList.add('hidden');
    });
    evt.preventDefault;
});


setupOpen.addEventListener('click', openSetup);
setupOpen.addEventListener('keydown', onCloseSetupEnterPress);

setupClose.addEventListener('click', closeSetup);
setupClose.addEventListener('keydown', onOpenSetupEnterPress);
})();