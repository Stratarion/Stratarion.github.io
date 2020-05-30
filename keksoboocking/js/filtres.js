
 var filtresNode = document.querySelector('.map__filters');
console.log(filtresNode)
filtresNode.addEventListener('click', activateFiltres);
var filtredOffers = [];

window.checkActiveFiltres = function (arr, name) {
    for (filter in activeFiltres) {
        if (filter != name) {
            if (activeFiltres[filter].status == 1) {
                arr = activeFiltres[filter].selection(arr);
            };
        };
        
    };
    return arr
};
function activateFiltres() {
    filtresNode.removeEventListener('click', activateFiltres);
    
    
    filtresTypeNode.addEventListener('change', typeSelection);
    
    
    function typeSelection () {
        clearMap();
        filtredOffers = JSON.parse(JSON.stringify(offers));
        if (filtresTypeNode.value == 'any') {
            activeFiltres.type.status = 0;
    
        } else {
            filtredOffers = activeFiltres.type.selection(filtredOffers);
            activeFiltres.type.status = 1;
        };
        filtredOffers = checkActiveFiltres(filtredOffers, 'type');
        renderPins(filtredOffers); 
    
    };
    
    
    filtresPriceNode.addEventListener('change', priceSelection);
    
    function priceSelection() {  
        clearMap();
        filtredOffers = JSON.parse(JSON.stringify(offers));
        if (filtresPriceNode.value == 'any') {
            activeFiltres.price.status = 0;
            
        } else {
            filtredOffers = activeFiltres.price.selection(filtredOffers);
            activeFiltres.price.status = 1;
    
        };
        filtredOffers = checkActiveFiltres(filtredOffers, 'price');
        renderPins(filtredOffers); 
    
        offersAdditional = JSON.parse(JSON.stringify(offers));
    };


    filtresRoomsNode.addEventListener('change', roomsSelection);

    function roomsSelection () {
        clearMap();
        filtredOffers = JSON.parse(JSON.stringify(offers));
        if (filtresRoomsNode.value == 'any') {
            activeFiltres.rooms.status = 0;
    
        } else {
            filtredOffers = activeFiltres.rooms.selection(filtredOffers);
            activeFiltres.rooms.status = 1;
        };
        filtredOffers = checkActiveFiltres(filtredOffers, 'rooms');
        renderPins(filtredOffers); 
    
    };

    filtresGuestsNode.addEventListener('change', guestsSelection);

    function guestsSelection () {
        clearMap();
        filtredOffers = JSON.parse(JSON.stringify(offers));
        if (filtresGuestsNode.value == 'any') {
            activeFiltres.guests.status = 0;
    
        } else {
            filtredOffers = activeFiltres.guests.selection(filtredOffers);
            activeFiltres.guests.status = 1;
        };
        filtredOffers = checkActiveFiltres(filtredOffers, 'guests');
        renderPins(filtredOffers); 
    
    };

    featuresNodes.forEach(element => {
        element.addEventListener('click', onFeaturesHendler);
    });
    

    function onFeaturesHendler() {
        clearMap();
        filtredOffers = JSON.parse(JSON.stringify(offers));
        if (this.checked == 1) {
            filtredOffers = activeFiltres[this.value].selection(filtredOffers);
            activeFiltres[this.value].status = 1;

        } else {
            activeFiltres[this.value].status = 0;

        };
        filtredOffers = checkActiveFiltres(filtredOffers, this.value);
        renderPins(filtredOffers);
    };


};






// console.log(filtresNode);
