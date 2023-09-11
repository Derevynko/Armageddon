/* eslint-disable default-case */
import React from "react";
import orderAsteroids from "../../css/OrderList.css";
import app from "../../css/App.css";

function OrderList({
  data,
  orderList,
  isDistanceKilometers,
  onAddClick,
  onRemoveClick,
  onOpenPopup,
}) {
  const yearDataAsteroid =
    data.close_approach_data[0].close_approach_date.slice(0, 4);
  const monthDataAsteroid =
    data.close_approach_data[0].close_approach_date.slice(5, 7);
  const dayDataAsteroid =
    data.close_approach_data[0].close_approach_date.slice(8);
  const isPotentiallyHazardousAsteroid = data.is_potentially_hazardous_asteroid;
  const asteroidName = data.name.slice(data.name.indexOf("(") + 1, -1);

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
    onRemoveClick(data);
  }

  function handleAsteroidClick() {
    onOpenPopup(data);
  }

  return (
    <li>
      <h3 className="date">
        {dayDataAsteroid} {monthNameDataAsteroid} {yearDataAsteroid}
      </h3>
      <div className="asteroid-description">
        <h4 className="">Астероид {asteroidName}</h4>
        <p className="asteroid-description__text">
          &#8709;{" "}
          {`${Math.floor(
            data.estimated_diameter.meters.estimated_diameter_max
          )} м`}
        </p>
        <span className="asteroid-description__text">
          &#8596;{" "}
          {`${
            isDistanceKilometers
              ? Math.floor(
                  data.close_approach_data[0].miss_distance.kilometers
                ) + " км"
              : Math.floor(data.close_approach_data[0].miss_distance.lunar) +
                " лунных орбит"
          }`}
        </span>
        <p className="asteroid-description__text">
          {isPotentiallyHazardousAsteroid ? "Опасен" : "Не опасен"}
        </p>
      </div>
    </li>
  );
}

export default OrderList;
