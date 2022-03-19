import React from "react";

function Card(props){
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(   
    <div className="elements__item">
      {/* <button type="button" className="elements__item_close"></button> */}
      <img className="elements__image" src={props.link} alt="" onClick={handleClick} />
      <div className="elements__title-container">
        <p className="elements__title">{props.name}</p>
        <div className="elements__like-container">
          <button type="button" className="elements__like" />
          <div className="elements__like-amount">{props.likes}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;