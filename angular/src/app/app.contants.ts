/**
 * @name USER_TYPES
 * @type {{ADMIN: {value: string; key: string}; JUGADOR: {value: string; key: string}; ARBITRO: {value: string; key: string}}}
 */
export const USER_TYPES = {
  ADMIN: {value: 'Administrador', key: '1'},
  JUGADOR: {value: 'Jugador', key: '3'},
  ARBITRO: {value: 'Arbitro', key: '2'},
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
