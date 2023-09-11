import React, { useState } from "react";
import asteroids from "../../css/Asteroids.css";
import AsteroidImage from "../../images/asteroid.svg";
import Arrow from "../../images/Arrow.svg";
import { Link } from "react-router-dom";

function Asteroids({
  data,
  orderList,
  isDistanceKilometers,
  onAddClick,
  onRemoveClick,
  onOpenPopup,
}) {
  const yearDataAsteroid =
    data?.close_approach_data[0].close_approach_date.slice(0, 4);
  const monthDataAsteroid =
    data?.close_approach_data[0].close_approach_date.slice(5, 7);
  const dayDataAsteroid =
    data?.close_approach_data[0].close_approach_date.slice(8);
  const isPotentiallyHazardousAsteroid =
    data?.is_potentially_hazardous_asteroid;
  const asteroidName = data?.name.slice(data.name.indexOf("(") + 1, -1);
  const [isAddOrder, setIsAddOrder] = useState(false);

  let monthNameDataAsteroid;
  switch (monthDataAsteroid) {
    case "01":
      monthNameDataAsteroid = "Января";
      break;
    case "02":
      monthNameDataAsteroid = "Февраля";
      break;
    case "03":
      monthNameDataAsteroid = "Марта";
      break;
    case "04":
      monthNameDataAsteroid = "Апреля";
      break;
    case "05":
      monthNameDataAsteroid = "Мая";
      break;
    case "06":
      monthNameDataAsteroid = "Июня";
      break;
    case "07":
      monthNameDataAsteroid = "Июля";
      break;
    case "08":
      monthNameDataAsteroid = "Августа";
      break;
    case "09":
      monthNameDataAsteroid = "Сентября";
      break;
    case "10":
      monthNameDataAsteroid = "Октября";
      break;
    case "11":
      monthNameDataAsteroid = "Ноября";
      break;
    case "12":
      monthNameDataAsteroid = "Декабря";
      break;
  }

  function handleClick() {
    if (isAddOrder) {
      onRemoveClick(data);
      setIsAddOrder(false);
    } else {
      onAddClick(data);
      setIsAddOrder(true);
    }
  }

  return (
    <li>
      <h3>
        {dayDataAsteroid} {monthNameDataAsteroid} {yearDataAsteroid}
      </h3>

      <div className="asteroid-list-container">
        <div className="asteroid-information">
          <div className="asteroid-information__distance">
            <p>
              {`${
                isDistanceKilometers
                  ? Math.floor(
                      data?.close_approach_data[0].miss_distance.kilometers
                    ).toLocaleString("ru-RU") + " км"
                  : Math.floor(
                      data?.close_approach_data[0].miss_distance.lunar
                    ).toLocaleString("ru-RU") + " лунных орбит"
              }`}
            </p>
            <img
              src={Arrow}
              className="asteroid-information__distance_arrow"
              alt="Стрелка"
            />
          </div>
          <img
            src={AsteroidImage}
            className={`${
              Math.floor(
                data?.estimated_diameter.meters.estimated_diameter_max
              ) > 100
                ? "big"
                : "small"
            }`}
            alt="Астероид"
          />
          <div className="asteroid-information__name">
            <a
              className=""
              href={`https://derevynko.github.io/armageddon/${data?.id}`}
            >
              {asteroidName}
            </a>
            <p className="diametr">
              &#8709;{" "}
              {`${Math.floor(
                data?.estimated_diameter.meters.estimated_diameter_max
              )} м`}
            </p>
          </div>
        </div>
        {orderList && (
          <div className="asteroid-information__dangerous">
            <button
              type="button"
              className={`order__button ${
                !orderList?.map((item) => item.id).includes(data.id)
                  ? "no-ordered"
                  : "ordered"
              }`}
              onClick={handleClick}
            >
              {!orderList?.map((item) => item.id).includes(data.id)
                ? "ЗАКАЗАТЬ"
                : "В КОРЗИНЕ"}
            </button>
            <p className="potentially">
              {isPotentiallyHazardousAsteroid ? "⚠️Опасен" : null}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

export default Asteroids;
