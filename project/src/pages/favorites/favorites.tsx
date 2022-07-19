import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesContainer from '../favorites/favorites';
import {Offer} from '../../types/offer';

type FavoritesProps = {
  offers: Offer[];
}

function Favorites ({offers}: FavoritesProps): JSX.Element {

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesContainer offers = {offers}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
