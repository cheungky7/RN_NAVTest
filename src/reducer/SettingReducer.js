
export default (state=0,action)=> {
    switch(action.type)
    {
        case 'changeLocale':
            state.UserSetting.userLocale=action.userLocale;
        break;
        default:
    }
}