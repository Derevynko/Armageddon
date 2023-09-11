import React from "react";
import { useParams } from "react-router-dom";
import asteroidPage from "../../css/AsteroidPage.css";
import Asteroids from "../Asteroids/Asteroids";

function AsteroidPage(data) {
  const { id } = useParams();
  console.log(id);
  const currentAsteroid = data.data.find((asteroids) => asteroids.id === id);
  console.log(currentAsteroid);
  const asteroidName = currentAsteroid?.name.slice(
    currentAsteroid?.name.indexOf("(") + 1,
    -1
  );
  return (
    currentAsteroid && (
      <div className="asteroid-page">
        <h2>{`Aстероид ${asteroidName}`}</h2>
        <Asteroids data={currentAsteroid} />
        <div className="list-of-rapprochement">
          <p>Список сближений:</p>
          <ul>
            {currentAsteroid?.close_approach_data?.map((item) => (
              <li>
                <p>{`скорость относительно Земли: ${Math.round(
                  item?.relative_velocity?.kilometers_per_hour
                )} км/час`}</p>
                <p>{`Время максимального сближения с Землей: ${item?.close_approach_date_full}`}</p>
                <p>{`Расстояние до Земли: ${Math.round(
                  item?.miss_distance?.kilometers
                )} км`}</p>
                <p>{`По орбите вокруг чего летит: ${item?.orbiting_body}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}

export default AsteroidPage;
