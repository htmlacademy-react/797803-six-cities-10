import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {PLACE_CARDS_COUNT, START_PLACE_CARD_ID, PlaceCardClass} from '../../const';
import {Offer} from '../../types/offer';

type PlaceCardListProps = {
    classComponent: PlaceCardClass;
    offers: Offer[];
  }

const getComponentClassName = (type: PlaceCardClass) => {
  switch (type) {
    case PlaceCardClass.Cities:
      return 'cities__places-list places__list tabs__content';
    case PlaceCardClass.Favorites:
      return 'favorites__places';
    case PlaceCardClass.NearPlaces:
      return 'near-places__list places__list';
  }
};

function PlaceCardList ({offers, classComponent}:PlaceCardListProps): JSX.Element {
  const [, setIdPlaceCard] = useState(START_PLACE_CARD_ID);

  return (
    <div className={getComponentClassName(classComponent)}>
      {
        Array.from(Array(PLACE_CARDS_COUNT)
          .keys())
          .map((item) => (
            <PlaceCard
              key = {offers[item].id}
              classComponent = {classComponent}
              offer = {offers[item]}
              onMouseEnterPlaceCard = {setIdPlaceCard}
            />) )
      }
    </div>
  );
}

export default PlaceCardList;
