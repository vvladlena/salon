const contactList = [{
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.6528514431926!2d16.913886994237316!3d51.15895824859984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470feacf7829b595%3A0xc24719547db7f10c!2zR8WCw7N3bmEgNSwgNTQtMDYxIFdyb2PFgmF3!5e0!3m2!1sru!2spl!4v1664219427987!5m2!1sru!2spl",
    txtAddress: '54-061 Wrocław, ul. Główna 5A',
    txtMail: 'studio@gmail.com',
    txtPhone: '(+48) 123 456 789',
},
{
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.237083533226!2d17.008999615636675!3d51.1225347795738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9fbd5c9ca73%3A0x34c5606569f88ab5!2zRMWCdWdhIDE1MiwgNTMtNjU3IFdyb2PFgmF3!5e0!3m2!1sru!2spl!4v1664713940656!5m2!1sru!2spl",
    txtAddress: '53-657 Wrocław, ul. Długa 152/3',
    txtMail: 'secondmail@gmail.com',
    txtPhone: '(+48) 987 654 321',
},
];

const contactMap = document.querySelector('iframe');
const contactAddress = document.getElementById('contactAddress');
const contactMail = document.getElementById('contactMail');
const contactPhone = document.getElementById('contactPhone');
const contactButton = document.getElementById('contactButton');

let contactActive = 0;

contactButton.onclick = function() {
    contactActive++;
if (contactActive === contactList.length) {
    contactActive = 0;
}
contactMap.src = contactList[contactActive].mapSrc;
contactAddress.textContent = contactList[contactActive].txtAddress;
contactMail.textContent = contactList[contactActive].txtMail;
contactPhone.textContent = contactList[contactActive].txtPhone;
}


