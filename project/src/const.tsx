export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Property = '/offer/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export enum PlaceCardClass {
  Cities = 'cities',
  Favorites = 'favorites',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const OFFERS_COUNT = 312;

export const PLACE_CARDS_COUNT = 4;

export const RATING_WIDTH_FACTOR = 14.8;

export const START_PLACE_CARD_ID = 0;
