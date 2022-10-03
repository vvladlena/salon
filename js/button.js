const button = document.querySelector('#button');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
    popup.classList.add('popup_open');
});


function closeForm() {
    popup.classList.remove('popup_open');
}

window.onclick = function (e) {
    if (e.target == popup) {
        closeForm();
    }
}