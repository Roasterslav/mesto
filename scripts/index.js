/* console.log("Helo, epta"); */

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button-img');
const closeButton = document.querySelector('.popup__button-close');

/* const disableLike = document.querySelector('.element__button-like_disable');
const activeLike = document.querySelector('.element__button-like_active');
const likeButton = document.querySelector('.element__button-like'); */

/* const saveButton = document.querySelector('popup__button-save'); */

const togglePopup = function () {
    popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

/* 
let saveButton = document.querySelector('.popup__button-save');

let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-about');

let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

function valuePopup () {
    jobInput.setAttribute (popup__input-about, 'value');
    nameInput.setAttribute (popup__input-name, 'value');
    
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    togglePopup ();
}

saveButton.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', valuePopup); */

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