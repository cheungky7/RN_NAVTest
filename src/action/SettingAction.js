export const CHANGE_LOCALE = 'CHANGE_LOCALE';


export function changelocale(locale) {
    return {
      type: CHANGE_LOCALE,
      locale
    }
  }