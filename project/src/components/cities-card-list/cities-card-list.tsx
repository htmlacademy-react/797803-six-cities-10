import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {PLACE_CARDS_COUNT, START_PLACE_CARD_ID, PlaceCardClass} from '../../const';
import {Offer} from '../../types/offer';

type CitiesCardListProps = {
    offers: Offer[];
  }

function CitiesCardList ({offers}:CitiesCardListProps): JSX.Element {
  const [, setIdPlaceCard] = useState(START_PLACE_CARD_ID);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        Array.from(Array(PLACE_CARDS_COUNT)
          .keys())
          .map((item) => (<PlaceCard key = {`place-card-${offers[item].id}`} classComponent = {PlaceCardClass.Cities} offer = {offers[item]} handlePlaceCardMouseEnter = {setIdPlaceCard}/>) )
      }
    </div>
  );
}

export default CitiesCardList;
