// open popup const
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__button-close');

// form submit let
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name_text');
let jobInput = document.querySelector('.popup__input_about_text');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

// open popup and popup value
function openPopup () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popup.classList.add('popup_opened');
}

// close popup
function closePopup () {
    popup.classList.remove('popup_opened');
}

// form submit
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}

//  listener open/close popup
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// listener form
formElement.addEventListener('submit', formSubmitHandler);
