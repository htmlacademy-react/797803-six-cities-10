import {CITIES} from '../../const';

function LocationList (): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key = {city} className="locations__item">
          <a className="locations__item-link tabs__item" href="/">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
