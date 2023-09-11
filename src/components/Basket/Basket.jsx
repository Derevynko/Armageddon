import React from "react";
import basket from "../../css/Basket.css";

function Basket({ quantityOfAsteroids, onClick }) {
  return (
    <div className="basket">
      <div>
        <h4 className="basket__item">Корзина</h4>
        <p className="basket__quantity">{`${quantityOfAsteroids} астероидов`}</p>
      </div>
      {quantityOfAsteroids > 0 ? (
        <button className="sending-asteroids" onClick={onClick}>
          Отправить
        </button>
      ) : null}
    </div>
  );
}

export default Basket;
