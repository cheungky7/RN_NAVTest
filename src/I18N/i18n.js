import I18n from 'react-native-i18n';
import en from './en';
import tw from './tw';
 
I18n.fallbacks = true;
 
I18n.translations = {
  en,
  tw
};
 
export default I18n;