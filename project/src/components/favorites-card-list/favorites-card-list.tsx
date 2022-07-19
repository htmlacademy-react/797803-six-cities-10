import PlaceCard from '../place-card/place-card';
import {CITIES, PlaceCardClass} from '../../const';
import {Offer} from '../../types/offer';

type FavoritesCardListProps = {
    offers: Offer[];
  }

function FavoritesCardList({offers}: FavoritesCardListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {CITIES.map((city) => (
        <li key = {city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <PlaceCard
                key = {offer.id}
                classComponent = {PlaceCardClass.Favorites}
                offer = {offer}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesCardList;
