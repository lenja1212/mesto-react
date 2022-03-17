//import logo from './logo.svg';
import React from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup.js";

function App() {

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isEditAvatarPopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick(){
    // const profileChangeButton = document.querySelector(".popup_format_change");
    // profileChangeButton.classList.add("popup_visible");
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(){
    // const profileChangeButton = document.querySelector(".popup_format_edit");
    // profileChangeButton.classList.add("popup_visible");
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick(){
    // const profileChangeButton = document.querySelector(".popup_format_add");
    // profileChangeButton.classList.add("popup_visible");
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(card);
  }

  function closeAllPopups(){
    // const profileChangeButton = document.querySelector(".popup_visible");
    // profileChangeButton.classList.remove("popup_visible");
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={"edit"}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          window=""
          children={(
            <>
              <input id="title-input" name="name" type="text" className="popup__input popup__input_format_title" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="title-input-error popup__input-error" />
              <input id="subtitle-input" name="about" type="text" className="popup__input popup__input_format_subtitle"  placeholder="Занятие" minLength="2" maxLength="200" required />
              <span className="subtitle-input-error popup__input-error" />
            </>
          )}
        />
        <PopupWithForm
          name={"add"}
          title={"Новое место"}
          buttonText={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          window=""
          children={(
            <>
              <input id="name-input" name="title" type="text" placeholder="Название" className="popup__input popup__input_format_name" minLength="2" maxLength="30" required />
              <span className="name-input-error popup__input-error" />
              <input id="link-input" name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_format_link" required />
              <span className="link-input-error popup__input-error" />
            </>
          )}
        />

        <PopupWithForm
          name={"change"}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          window="-change"
          onClose={closeAllPopups}
          children={(
            <>
              <input id="link-input-pic" name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_format_ava" required />
              <span className="link-input-pic-error link-input-error-change popup__input-error" />
            </>
          )}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      
      {/* <div className="popup popup_format_delete-card">
        <div className="popup__window-delete">
          <button type="button" className="popup__close popup__close_format_delete" />
          <p className="popup__title">Вы уверены?</p>
          <button type="submit" className="popup__button popup__button_delete">Да</button>
        </div>  
      </div>
      
      <template className="elements__template-with-delete" />
      <template className="elements__template-without-delete" /> */}
      </div>
    </body>
  );
}

export default App;
