function ImagePopup(props){
  return(
    <div className={`popup popup_format_image" ${props.card ? "popup_visible" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close popup__close_format_img" onClick={props.onClose}/>
        <img className="popup__image" src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""} />
        <p className="popup__subtitle">{props.card ? props.card.name : ""}</p>
      </div>  
    </div>
  )
}

export default ImagePopup