import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritiesCardList from '../../components/favorites-card-list/favorites-card-list';
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
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritiesCardList offers={offers}/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
