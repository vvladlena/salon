const slideList = [{
        img: "./images/location/pedicure1.jpg",
        textName: 'Miejsce na pedicure',
        textAddress: 'Wrocław, ul. Główna'
    },
    {
        img: "./images/location/pedicure2.jpg",
        textName: 'Miejsce na pedicure 2',
        textAddress: 'Wrocław, ul.Długa'
    },
    {
        img: "./images/location/pedicure3.jpg",
        textName: 'Miejsce na pedicure 3',
        textAddress: 'Wrocław, ul. Główna'
    },
];

const image = document.getElementById('firstLocationImg');
const locationName = document.getElementById('firstLocationName');
const locationAddress = document.getElementById('firstLocationAddress');
const buttonArrow = document.getElementById('firstLocationButton');

let active = 0;

buttonArrow.onclick = function() {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    locationName.textContent = slideList[active].textName;
    locationAddress.textContent = slideList[active].textAddress;
  }