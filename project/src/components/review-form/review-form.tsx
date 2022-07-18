import React from 'react';
import {useState, ChangeEvent} from 'react';
import {REVIEW_FORM_STATUS} from '../../const';

function ReviewForm(): JSX.Element {

  const [formData, setFormData] = useState({
    review: '',
    rating: null,
  });

  const fieldChangeHadle = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_FORM_STATUS.map((item) => (
          <React.Fragment key = {item.startNumber}>
            <input onChange={fieldChangeHadle} className="form__rating-input visually-hidden" name="rating" defaultValue={item.startNumber} id={`${item.startNumber}-stars`} type="radio" />
            <label htmlFor={`${item.startNumber}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea onChange={fieldChangeHadle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={''} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
