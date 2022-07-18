import {RATING_WIDTH_FACTOR} from '../../const';
import {Offer} from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  onMousePlaceCard: (currentIdPlaceCard: number) => void;
}

function PlaceCard ({offer, onMousePlaceCard}:PlaceCardProps): JSX.Element {

  const {id, isPremium, previewImage, price, rating, title, type} = offer;

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => {
        onMousePlaceCard(id);}}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img
            className="place-card__image"
            src={previewImage}
            alt="Place figure"
            width={260}
            height={200}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating * RATING_WIDTH_FACTOR}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
