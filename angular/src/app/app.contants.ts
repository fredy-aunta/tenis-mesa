/**
 * @name USER_TYPES
 * @type {{ADMIN: {value: string; key: string}; JUGADOR: {value: string; key: string}; ARBITRO: {value: string; key: string}}}
 */
export const USER_TYPES = {
  ADMIN: {value: 'Administrador', key: '3', prefixCookieName: 'admin-'},
  JUGADOR: {value: 'Jugador', key: '1', prefixCookieName: 'player-'},
  ARBITRO: {value: 'Arbitro', key: '2', prefixCookieName: 'referee-'},
};


/**
 * @name RESPONSE_MESSAGES
 * @type {{SUCCESS: {REQUEST_API: string}; ERROR: {REQUEST_API: string; FORM: string}}}
 */
export const RESPONSE_MESSAGES = {
  SUCCESS: {
    REQUEST_API: 'Sus datos se han guardado exitosamente'
  },
  ERROR: {
    REQUEST_API: 'Hubo un error guardando la información, por favor intente mas tarde',
    FORM: 'Revise por favor el formulario!!'
  }
};

/**
 * @name COOKIE_NAMES
 * @type {{PLAYERS_SELECTED: string; REFEREES_SELECTED: string}}
 */
export const COOKIE_NAMES = {
  PLAYERS_SELECTED: 'players-selected',
  REFEREES_SELECTED: 'referees-selected',
  TOURNAMENT: 'tournament',
  INITIAL_DATE_TOURNAMENT: 'initial-date-tournament'
};
