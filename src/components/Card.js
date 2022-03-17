import React from "react";

function Card(props){

  function handleClick() {
    props.onCardClick(props.card)
  }

  return(   
    <div className="elements__item">
      {/* <button type="button" className="elements__item_close"></button> */}
      <img className="elements__image" src={props.card.link} alt="" onClick={handleClick} />
      <div className="elements__title-container">
        <p className="elements__title">{props.card.name}</p>
        <div className="elements__like-container">
          <button type="button" className="elements__like"></button>
          <div className="elements__like-amount">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;