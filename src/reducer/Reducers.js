import { combineReducers } from 'redux'
import SettingReducer from './SettingReducer'

const Reducers=combineReducers({
    Setting: SettingReducer, //Name of mapStateToProps state.name.xxx define here
  });

  export default Reducers;