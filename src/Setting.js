import { connect } from 'react-redux'
import SettingView from './SettingView'
import { changelocale } from './action/SettingAction'
//import UserSetting from './model/UserSetting'


const mapStateToProps = (state) => {
    console.log(state);
    return {
      userLocale: state.Setting.userLocale
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      OnChangelocale: (locale) => {
        dispatch(changelocale(locale))
      },
    }
  }


const Setting = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SettingView)

  export default Setting;