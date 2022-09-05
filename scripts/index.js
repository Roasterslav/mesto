const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button-img');
const closeButton = document.querySelector('.popup__button-close');

const togglePopup = function () {
    popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);


let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-about');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let saveButton = document.querySelector('.popup__button-save');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', formSubmitHandler);
saveButton.addEventListener('click', togglePopup);