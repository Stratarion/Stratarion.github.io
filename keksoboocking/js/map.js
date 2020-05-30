


// обработка при нажатии на главную иконку (первое нажатие)

var pinMain = document.querySelector('.map__pin--main');
pinMain.addEventListener('mousedown', startIconHeandler);

function activateFieldset() {
    var fieldsetAll = document.querySelectorAll('fieldset');

    for (let i = 0; i < fieldsetAll.length; i++) {
        fieldsetAll[i].removeAttribute('disabled');
    };

    document.querySelector('.notice__form').classList.remove('notice__form--disabled');

    
};

function startIconHeandler() {
    window.load(successHeandler, errorHeandler);
    var inputAddress = document.querySelector('#address');
    inputAddress.placeholder = pinMain.offsetLeft + ', ' + pinMain.offsetTop;
    activateFieldset();

    // активация инпутов (вызывается при нажатии на иконку)
    var map = document.querySelector('.map');
    map.classList.remove('map--faded');
    pinMain.addEventListener('mousedown', pinMainClickHandler);
    pinMain.removeEventListener('mousedown', startIconHeandler);

    function pinMainClickHandler(evtDown) {
        inputAddress.value = pinMain.offsetLeft + ', ' + pinMain.offsetTop;
        
        var startCoords = {
            x: evtDown.clientX,
            y: evtDown.clientY
        };
        function onPinMove(evtMove) {
            var shift = {
                x: startCoords.x - evtMove.clientX,
                y: startCoords.y - evtMove.clientY
            };

            startCoords = {
                x: evtMove.clientX,
                y: evtMove.clientY
            };

            pinMain.style.left = (pinMain.offsetLeft - shift.x) + 'px';
            pinMain.style.top = (pinMain.offsetTop - shift.y) + 'px';
            inputAddress.value = pinMain.offsetLeft + ', ' + pinMain.offsetTop;
            clearMap();
            renderPins(offers)

        };

        function onPinUp() {
            map.removeEventListener('mousemove', onPinMove);
            document.removeEventListener('mouseup', onPinUp);
            inputAddress.value = pinMain.offsetLeft + ', ' + pinMain.offsetTop;
        }

        map.addEventListener('mousemove', onPinMove);
        document.addEventListener('mouseup', onPinUp);
    };


};


//render offers
var mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin');
var mapCardTemplate = document.querySelector('template').content.querySelector('.map__card');
var pins = document.querySelector('.map__pins');

var filtresTypeNode = filtresNode.querySelector('#housing-type');
var filtresPriceNode = filtresNode.querySelector('#housing-price');
var filtresRoomsNode = filtresNode.querySelector('#housing-rooms');
var filtresGuestsNode = filtresNode.querySelector('#housing-guests');
var featuresNodes = filtresNode.querySelector('#housing-features').querySelectorAll('input');

window.activeFiltres = {
    type: {
        name: 'type',
        status: 0,
        selection (arr) {
            var save = JSON.parse(JSON.stringify(arr));
            arr = [];
            arr = save.filter(function (element) {
                return element.offer.type == filtresTypeNode.value
            })
            return arr
        }
    },
    price: {
        name: 'price',
        status: 0,
        selection (arrprice) {
            
                var save = JSON.parse(JSON.stringify(arrprice));
                arrprice = [];
                let minPrice = '';
                let maxPrice = Infinity;
                switch (filtresPriceNode.value) {
                    case 'low':
                        maxPrice = 10000;
                        break
                    case 'middle':
                        maxPrice = 50000;
                        minPrice = 10000;
                        break
                    case 'high':
                        minPrice = 50000;
                        break
                }
                arrprice = save.filter(function (element) {
                    return element.offer.price <= maxPrice && element.offer.price >= minPrice
                });
                return arrprice
            
        }
    },
    rooms: {
        name: 'rooms',
        status: 0,
        selection (arrrooms) {
            var save = JSON.parse(JSON.stringify(arrrooms));
            arrrooms = [];
            
            arrrooms = save.filter(function (element) {
                return element.offer.rooms == filtresRoomsNode.value
            })
            return arrrooms

        }
    },
    guests: {
        name: 'guests',
        status: 0,
        selection (arr) {
            var save = JSON.parse(JSON.stringify(arr));
            arr = [];
            
            arr = save.filter(function (element) {
                return element.offer.guests == filtresGuestsNode.value
            })
            return arr

        }
    },
    wifi: {
        name: 'wifi',
        status: 0,
        selection(arr) {
            var save = JSON.parse(JSON.stringify(arr));

            arr = save.filter(function (element) {
                return element.offer.features.indexOf('wifi') > -1
            });
            return arr
        }
    },
    dishwasher: {
        name: 'dishwasher',
        status: 0,
        selection(arr) {
            var save = JSON.parse(JSON.stringify(arr));

            arr = save.filter(function (element) {
                return element.offer.features.indexOf('dishwasher') > -1
            });
            return arr
        }
    },
    parking: {
        name: 'parking',
        status: 0,
        selection(arr) {
            var save = JSON.parse(JSON.stringify(arr));

            arr = save.filter(function (element) {
                return element.offer.features.indexOf('parking') > -1
            });
            return arr
        }
    },
    washer: {
        name: 'washer',
        status: 0,
        selection(arr) {
            var save = JSON.parse(JSON.stringify(arr));

            arr = save.filter(function (element) {
                return element.offer.features.indexOf('washer') > -1
            });
            return arr
        }
    },
    elevator: {
        name: 'elevator',
        status: 0,
        selection(arr) {
            var save = JSON.parse(JSON.stringify(filtredOffers));

            arr = save.filter(function (element) {
                return element.offer.features.indexOf('elevator') > -1
            });
            return arr
        }
    },
    conditioner: {
        name: 'conditioner',
        status: 0,
        selection(arr) {
            var save = JSON.parse(JSON.stringify(arr));

            arr = save.filter(function (element) {
                return element.offer.features.indexOf('conditioner') > -1
            });
            return arr
        }
    }
};

function renderPins(elements) {
    var fragment = new DocumentFragment();
    elements.forEach(offer => {

        offer.position = Math.abs(offer.location.x - pinMain.offsetLeft) + Math.abs(offer.location.y - pinMain.offsetTop);
    });
    function compareNumeric(a, b) {
        if (a.position > b.position) return 1;
        if (a.position < b.position) return -1;
      }
      
    let save = JSON.parse(JSON.stringify(elements)); 
    save = checkActiveFiltres(save, '');

    save.sort(compareNumeric);
    var realLength = 5;
    if (save.length < 5 ) {
        realLength = save.length
    };

    for (var i = 0; i < realLength; i++) {
        fragment.appendChild(renderPin(save[i]));
    }
    pins.appendChild(fragment);

};


function clearMap() {
    var map = document.querySelectorAll('.map__pin');
    for (var i = 1; i < map.length; i++) {
        map[i].parentNode.removeChild(map[i]);
    }
}


function renderPin(element){
    let newOffer = mapPinTemplate.cloneNode(true);

    newOffer.style.left = element.location.x + 'px';
    newOffer.style.top = element.location.y + 'px';

    newOffer.querySelector('img').src = element.author.avatar;

    newOffer.addEventListener('click', renderOffer)

    function renderOffer() {
        var card = mapCardTemplate.cloneNode(true);
        if (document.querySelector('.map__card')) {
            document.querySelector('.map').removeChild(document.querySelector('.map__card'))
        };
        card.querySelector('img').src = element.author.avatar;

        card.querySelector('.popup__title').textContent = element.offer.title;
        card.querySelector('.popup__text--address').textContent = element.offer.address;
        card.querySelector('.popup__price').textContent = element.offer.price;
        var type = element.offer.type;
        switch (element.offer.type) {
            case 'house': 
                type = 'Дом'
                break
            case 'flat':
                type = 'Квартира'
                break
            case 'bungalo':
                type = 'Бунгало'
                break
        };
        card.querySelector('.popup__type').textContent = type;


        var capacityMessage = element.offer.rooms + ' ';
        var specSim = element.offer.rooms % 10;

        if (specSim == 1 && element.offer.rooms != 11) {
            capacityMessage += 'комната'
        } else if (specSim == 2 || specSim == 3 || specSim == 4) {
            capacityMessage += 'комнаты'
        } else {
            capacityMessage += 'комнат'
        };
        capacityMessage += ' для ' + element.offer.guests;
        specSim = element.offer.guests % 10;
        if (specSim == 1 && element.offer.guests != 11) {
            capacityMessage += ' гостя'
        } else {
            capacityMessage += ' гостей'
        };

        var oldFeature = card.querySelector('.popup__features').querySelectorAll('.feature');
        for (let i = 0; i < oldFeature.length; i++) {
            oldFeature[i].remove()
        };
        
        for (let i = 0; i < element.offer.features.length; i++) {
            renderNoteFeature(element.offer.features[i])
        };


        card.querySelector('.popup__description').textContent = element.offer.description;
        
        function renderNoteFeature(featuresType) {
            let className = 'feature--' + featuresType;
            let element = document.createElement('li');

            element.classList.add(className);
            element.classList.add('feature');
            card.querySelector('.popup__features').appendChild(element);
        };

        var offerPictures = card.querySelector('.popup__pictures');

        for (let i = 0; i < element.offer.photos.length; i++) {
            let liPhotos = document.createElement('li');
            let imgPhotos = document.createElement('img');
            imgPhotos.src = element.offer.photos[i];
            liPhotos.appendChild(imgPhotos);
            offerPictures.appendChild(liPhotos);
        };

        card.querySelector('.popup__text--capacity').textContent = capacityMessage;

        card.querySelector('.popup__text--time').textContent = 'Заезд после: ' + element.offer.checkin + ' выезд до: ' + element.offer.checkout;

        card.querySelector('.popup__close').addEventListener('click', function() {
            card.remove();
        });

        document.querySelector('.map').insertBefore(card, document.querySelector('.map__filters-container'));
    }

    return newOffer
};






var form = document.querySelector('.notice__form');
form.addEventListener('submit', function(evt) {
    window.upload(new FormData(form), function(response) {
        form.classList.add('notice__form--disabled');
        console.log(response);
    });
    evt.preventDefault();
});




// load DB
function successHeandler(offers) {
    renderPins(offers);
    window.offers = offers;
    
};
function errorHeandler(errorStatus) {
    console.log(errorStatus)
};

// upload data








