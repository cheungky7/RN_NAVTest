import {CHANGE_LOCALE} from '../action/SettingAction';
import I18n from '../I18N/i18n'

export default (state = {},action)=> {
    switch(action.type)
    {
        case CHANGE_LOCALE:
            console.log(state);
           // console.log(action);
            I18n.locale=action.locale;
            //state.UserSetting.userLocale=I18n.locale;
           // const newState=[...state];
            return Object.assign({...state},{userLocale:I18n.locale});
        //break;
        default:
            return state
    }
}