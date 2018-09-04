import Reducers from './reducer/Reducers'
import { createStore } from 'redux'

const store=createStore(Reducers);

export default store;