import dayjs from 'dayjs';
import {Review} from '../../types/review';
import {RATING_WIDTH_REVIEW_FACTOR} from '../../const';

type ReviewProps = {
 review: Review
}

function ReviewCard ({review}: ReviewProps): JSX.Element {

  const {comment, date, rating, user} = review;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            alt="Reviews avatar"
            width={54}
            height={54}
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating * RATING_WIDTH_REVIEW_FACTOR}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default ReviewCard;
