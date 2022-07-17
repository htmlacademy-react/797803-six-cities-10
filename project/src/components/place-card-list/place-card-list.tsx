import PlaceCard from '../../components/place-card/place-card';
import {PLACE_CARDS_COUNT} from '../../const';
import {Offer} from '../../types/offer';

type PlaceCardListProps = {
    offers: Offer[];
  }

function PlaceCardList ({offers}:PlaceCardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        Array.from(Array(PLACE_CARDS_COUNT)
          .keys())
          .map((item) => (<PlaceCard offer = {offers[item]} key = {`place-card-${offers[item].id}`} />))
      }
    </div>
  );
}

export default PlaceCardList;
