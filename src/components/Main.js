import React from "react";
import {api} from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserInfo] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([])
  
  React.useEffect(() => {
    api.getAuthorInfo()
    .then((data) =>{
      setUserInfo(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => { 
      console.log(`Ошибка. Запрос не выполнен ${err}`); 
    });

    api.getInitialCards()
    .then((data) =>{
        setCards(data);
    })
    .catch((err) => { 
      console.log(`Ошибка. Запрос не выполнен ${err}`); 
    }); 
  }, []);
  return(
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__container profile__change-button" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar}  alt="Ава" />
        </button>
        <div className="profile__info-container">
          <div className="profile__info">
            <h1 className="profile__author">{userName}</h1>
            <p className="profile__author-about">{userDescription}</p>
          </div>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}/>
      </section>

      <ul className="elements">
        {
          cards.map((card) =>
            <Card
              key={card._id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
            />
          )
        }   
      </ul>

    </main>
  );
}

export default Main;