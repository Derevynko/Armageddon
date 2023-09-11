import React from 'react';
import popup from './AsteroidDescriptionPopup.module.css';
import Order from "../Order/Order"

function AsteroidDescriptionPopup({data, isOpen, onClose,onRemoveClick}) {
  function handleCLoseOverlayClick(e) {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return(
    <div className={`${popup.popup} ${isOpen ? popup.popup_opened : ''}`} onMouseDown={handleCLoseOverlayClick}>
      <div className={popup.popup_container}>
        <button type="button" className={popup.buttonClose} onClick={onClose}></button>
        <h3>Заказанные сближения</h3>
        <Order dataList={data} onRemoveClick={onRemoveClick}/>
      </div>
    </div>
  )
}

export default AsteroidDescriptionPopup;