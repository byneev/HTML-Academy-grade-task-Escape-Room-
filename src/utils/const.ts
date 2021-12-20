export const API_TIMEOUT = 5000;

export const COORDS_LATITUDE = 59.968137;
export const COORDS_LONGITUDE = 30.316272;


export const RUSSIAN_PHONE_NUMBER_REGEX = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

export const enum ThemeType {
  All = 'all',
  SciFi = 'sci-fi',
  Horror = 'horror',
  Detective = 'detective',
  Adventures = 'adventures',
  Mystic = 'mystic',
}

export const enum AppRoute {
  Main = '/',
  Details = '/quest',
  Contacts = '/contacts',
  NotFound = '/404',
}

export const enum APIRoute {
  Base = 'http://localhost:3001',
  Quests = '/quests',
  Orders = '/orders',
}

export const enum HTTPCode {
  NotFound = 404,
}

export const enum InputType {
  Text = 'text',
  Tel = 'tel',
  Number = 'number',
  Checkbox = 'checkbox',
}
