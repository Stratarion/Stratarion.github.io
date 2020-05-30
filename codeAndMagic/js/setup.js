
var coatColorWizards = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorWizards = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColorWizards = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

var userCoatSetup = document.querySelector('.wizard-coat');
var userEyesSetup = document.querySelector('.wizard-eyes');
var userFireballSetup = document.querySelector('.setup-fireball-wrap');

var mainWizard = {
    name: document.querySelector('.setup-user-name').value,
    colorCoat: 'rgb(101, 137, 164)',
    colorEyes: 'black',
    colorFireball: '#ee4830'
};

userCoatSetup.style.fill = mainWizard.colorCoat;
userEyesSetup.style.fill = mainWizard.colorEyes;
userFireballSetup.style.backgroundColor = mainWizard.colorFireball;

function generateMainWizard() {
    mainWizard = {
        name: document.querySelector('.setup-user-name').value,
        colorCoat: userCoatSetup.style.fill,
        colorEyes: userEyesSetup.style.fill,
        colorFireball: userFireballSetup.style.backgroundColor
    };
};



generateMainWizard()

// настройка цвета плаща игрока
userCoatSetup.addEventListener('click', changeUserCoatColor);

function changeUserCoatColor() {
    userCoatSetup.style.fill = getRandomCoatColor(); 
    generateMainWizard();
};

function getRandomCoatColor() {
    let color = '';
    colorsCount = coatColorWizards.length;
    newIndex = Math.floor(Math.random() * parseInt(colorsCount));
    color = coatColorWizards[newIndex];
    return color
};

// настройка цвета глаз игрока
userEyesSetup.addEventListener('click', changeUserEyesColor);

function changeUserEyesColor() {
    userEyesSetup.style.fill = getRandomEyeColor();
    generateMainWizard();
};

function getRandomEyeColor() {
    let color = '';
    colorsCount = eyesColorWizards.length;
    newIndex = Math.floor(Math.random() * parseInt(colorsCount));
    color = eyesColorWizards[newIndex];
    return color
};

// настройка цвета фаербола игрока
userFireballSetup.addEventListener('click', changeUserFireballColor);

function changeUserFireballColor() {
    userFireballSetup.style.backgroundColor = getRandomFireballColor();
    generateMainWizard();
};

function getRandomFireballColor() {
    let color = '';
    colorsCount = fireballColorWizards.length;
    newIndex = Math.floor(Math.random() * parseInt(colorsCount));
    color = fireballColorWizards[newIndex];
    return color
};