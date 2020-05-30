similarWizardTemplate = document.querySelector('template').content;
similarListElement = document.querySelector('.setup-similar-list');


var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement

};


window.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    
    wizards = sortSimilar(wizards, mainWizard);
    for (i = 0; i < 4; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
    };
    similarListElement.appendChild(fragment);
    window.wizardsAll = wizards;
    document.querySelector('.setup-similar').classList.remove('hidden');

});



function sortSimilar(wizards, mainWizard) {
    getRateSimilar(wizards, mainWizard);
    wizards.sort(function(left, right) {
        return right.rateSimilar - left.rateSimilar;
    });
    return wizards
};

function getRateSimilar(wizards, mainWizard) {
    wizards.forEach(wizard => {
        wizard.rateSimilar = 0;
        if (wizard.colorCoat === mainWizard.colorCoat) {
            wizard.rateSimilar += 2;
        };
        if (wizard.colorEyes === mainWizard.colorEyes) {
            wizard.rateSimilar += 1;
        };
    });
};


var userCoatSetup = document.querySelector('.wizard-coat');
var userEyesSetup = document.querySelector('.wizard-eyes');
var userFireballSetup = document.querySelector('.setup-fireball-wrap');

var lastTimeOut;

function reRendWizards() {
    var oldWizards = similarListElement.querySelectorAll('.setup-similar-item');
    oldWizards.forEach(oldWizard => {
        similarListElement.removeChild(oldWizard)
    });
    var fragment = document.createDocumentFragment();
    
    wizardsAll = sortSimilar(wizardsAll, mainWizard);
    for (i = 0; i < 4; i++) {
        fragment.appendChild(renderWizard(wizardsAll[i]));
    };
    similarListElement.appendChild(fragment);
}

function debounce() {

    if (lastTimeOut) {
        window.clearTimeout(lastTimeOut);
    } 
    lastTimeOut = window.setTimeout(function() {
        reRendWizards();
    }, 300);

};


userCoatSetup.addEventListener('click', debounce);

userEyesSetup.addEventListener('click', debounce);

userFireballSetup.addEventListener('click', debounce);