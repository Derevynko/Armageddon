import React, { useState } from "react";
import main from "../../css/Main.css";
import Planet from "../../images/planet.svg";
import AsteroidList from "../AsteroidList/AsteroidList";
import Basket from "../Basket/Basket";
import AsteroidDescriptionPopup from "../AsteroidDescriptionPopup/AsteroidDescriptionPopup";

function Main({
  distanceKilometers,
  distanceLunar,
  dataList,
  orderList,
  openPopup,
  isDistanceKilometers,
  onAddClick,
  onRemoveClick,
  updateData,
}) {
  const [isKilometers, setIsKilometers] = useState(true);
  console.log(orderList);
  console.log(openPopup);

  function handleDistanceKilometersClick() {
    distanceKilometers(true);
    setIsKilometers(true);
  }

  function handleDistanceLunarClick() {
    distanceLunar(false);
    setIsKilometers(false);
  }

  return (
    <section className="main">
      <div className="main__asteroids-list">
        <img className="planet" src={Planet} alt="Планета" />
        <h2 className={main.title}>
          Ближайшие подлёты <br /> астероидов
        </h2>
        <div className="asteroid-list__distance">
          <span>
            <button
              className={`button ${isKilometers && "active"}`}
              onClick={handleDistanceKilometersClick}
            >
              в километрах
            </button>
            &#8194;|&#8194;
            <button
              className={`button ${!isKilometers && "active"}`}
              onClick={handleDistanceLunarClick}
            >
              в лунных орбитах
            </button>
          </span>
        </div>

        <AsteroidList
          updateData={updateData}
          dataList={dataList}
          orderList={orderList}
          openPopup={openPopup}
          isDistanceKilometers={isDistanceKilometers}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
        />
      </div>
      <Basket
        className=""
        quantityOfAsteroids={orderList.length}
        onClick={openPopup}
      />
    </section>
  );
}

export default Main;
