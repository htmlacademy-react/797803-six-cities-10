import FavoritesCardList from '../favorites-card-list/favorites-card-list';
import {Offer} from '../../types/offer';

type FavoritesContainerProps = {
  offers: Offer[];
}

function FavoritesContainer ({offers}: FavoritesContainerProps): JSX.Element {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesCardList offers={offers}/>
    </section>
  );
}

export default FavoritesContainer;
