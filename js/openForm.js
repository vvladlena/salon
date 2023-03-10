const buttonIntro = document.querySelector('#intro-button');
const popup = document.querySelector('.popup');
const callButton = document.querySelector('#call-button');
const callPopup = document.querySelector('.call-popup');
const buttonJoin = document.querySelector('#join-button');




buttonIntro.addEventListener('click', () => {
    popup.classList.add('popup_open');
});

callButton.addEventListener('click', () => {
    callPopup.classList.add('call-popup_open');
});

buttonJoin.addEventListener('click', () => {
    popup.classList.add('popup_open');
});



function closeForm() {
    popup.classList.remove('popup_open');
    callPopup.classList.remove('call-popup_open');
}

window.onclick = function(e){
    if (e.target == popup || e.target == callPopup ) {
        closeForm();
    }
}

window.ontouchend = function(e){
    if (e.target == popup || e.target == callPopup ) {
        closeForm();
    }
}