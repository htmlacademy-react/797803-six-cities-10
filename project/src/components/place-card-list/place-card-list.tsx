import {useState} from 'react';
import PlaceCard from '../../components/place-card/place-card';
import {PLACE_CARDS_COUNT, START_PLACE_CARD_ID} from '../../const';
import {Offer} from '../../types/offer';

type PlaceCardListProps = {
    offers: Offer[];
  }

function PlaceCardList ({offers}:PlaceCardListProps): JSX.Element {
  const [idPlaceCard, setIdPlaceCard] = useState(START_PLACE_CARD_ID);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        Array.from(Array(PLACE_CARDS_COUNT)
          .keys())
          .map((item) => (<PlaceCard key = {`place-card-${offers[item].id}`} offer = {offers[item]} onMousePlaceCard = {(id)=> setIdPlaceCard(id)}/>))
      }
    </div>
  );
}

export default PlaceCardList;
