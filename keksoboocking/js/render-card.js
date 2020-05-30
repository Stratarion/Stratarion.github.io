


function renderSimilarNotes() {
    for (let i = 0; i < notes.length; i++) {
        fragment.appendChild(renderOffer(notes[i], i));
        
    };
    pins.appendChild(fragment); 
};

// рендер подробного описания
function renderCardOffer(i) {
    var map = document.querySelector('.map');
    var mapFiltersContainer = document.querySelector('.map__filters-container');
    map.insertBefore(mapCardTemplate, mapFiltersContainer);

    mapCardTemplate.querySelector('.popup__title').innerHTML = notes[i].offer.title;
    mapCardTemplate.querySelector('.popup__text--address').querySelector('small').innerHTML = notes[i].offer.address;
    mapCardTemplate.querySelector('.popup__price').innerHTML = notes[i].offer.price + ' &#x20bd;/ночь';

    var offerType = mapCardTemplate.querySelector('.popup__type');
    switch (notes[i].offer.type) {
        case 'flat': 
            offerType.innerHTML = 'Квартира'
            break
        case 'bungalo': 
            offerType.innerHTML = 'Бунгало'
            break
        case 'house': 
            offerType.innerHTML = 'Дом'
            break
        case 'palace': 
            offerType.innerHTML = 'Дворец'
            break
        
    };

    rendderCapacity(i);

    var checkMessage = 'Заезд после ' + notes[i].offer.checkin + ', выезд до ' + notes[i].offer.checkout;
    mapCardTemplate.querySelector('.popup__text--time').innerHTML = checkMessage;


    var oldFeature = mapCardTemplate.querySelector('.popup__features').querySelectorAll('.feature');
    for (let j = 0; j < oldFeature.length; j++) {
        oldFeature[j].remove()
    };

    for (let j = 0; j < notes[i].offer.features.length; j++) {
        renderNoteFeature(notes[i].offer.features[j]);
    };



    var offerPictures = document.querySelector('.popup__pictures');
    let oldPic = offerPictures.querySelectorAll('li');

    if (oldPic) {
        for (let g = 0; g < oldPic.length; g++) {

        offerPictures.removeChild(oldPic[g]);
        };
    };

    for (let j = 0; j < notes[i].offer.photos.length; j++) {
        let liPhotos = document.createElement('li');
        let imgPhotos = document.createElement('img');
        imgPhotos.src = notes[i].offer.photos[j];
        liPhotos.appendChild(imgPhotos);
        offerPictures.appendChild(liPhotos);
    };

    mapCardTemplate.querySelector('.popup__avatar').src = notes[i].author.avatar;
    mapCardTemplate.querySelector('.popup__description').innerHTML = notes[i].offer.description;

    let popupCloseButton = mapCardTemplate.querySelector('.popup__close');
    
    popupCloseButton.addEventListener('click', function() {
        closePopup(mapCardTemplate);
    });


};


function rendderCapacity(i) {
    var capacityMessage = notes[i].offer.rooms + ' ';
    var specSim = notes[i].offer.rooms % 10;
    
    if (specSim == 1 && notes[i].offer.rooms != 11) {
        capacityMessage += 'комната'
    } else if (specSim == 2 || specSim == 3 || specSim == 4) {
        capacityMessage += 'комнаты'
    } else {
        capacityMessage += 'комнат'
    };
    capacityMessage += ' для ' + notes[i].offer.guests;
    specSim = notes[i].offer.guests % 10;
    if (specSim == 1 && notes[i].offer.rooms != 11) {
        capacityMessage += ' гостя'
    } else {
        capacityMessage += ' гостей'
    };
    
    mapCardTemplate.querySelector('.popup__text--capacity').innerHTML = capacityMessage;
};


function renderNoteFeature(featuresType) {
    let className = 'feature--' + featuresType;
    let element = document.createElement('li');
    element.classList.add(className);
    element.classList.add('feature');
    document.querySelector('.popup__features').appendChild(element);
};
function closePopup(offer) {
    offer.remove();
}
