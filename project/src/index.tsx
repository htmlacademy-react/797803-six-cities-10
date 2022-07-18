import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {OFFERS_COUNT} from './const';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers = {offers} offersCount = {OFFERS_COUNT} reviews = {reviews}/>
  </React.StrictMode>,
);
