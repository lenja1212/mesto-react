function PopupWithForm(props){
  return(
    <div className={`popup popup_format_${props.name} ${props.isOpen ? `popup_visible` : ""}`}>
      <div className={`popup__window${props.window}`}>
        <button type="button" className={`popup__close popup__close_format_${props.name} ${props.isOpen ? "popup_visible" : ""}`} onClick={props.onClose}/>
        <p className="popup__title">{props.title}</p>
        <form className={`popup__form popup__form_format_${props.name}`}>
          {props.children}
          <button type="submit" className={`popup__button`}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;