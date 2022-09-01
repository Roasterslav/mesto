console.log("Helo, epta");

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button-img');
const closeButton = document.querySelector('.popup__button-close');
const saveButton = document.querySelector('popup__button-save');

const togglePopup = function () {
    popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);