import {createStore, combineReducers} from 'redux';

import generalReducer from './general/reducer';

const rootReducer = combineReducers({general: generalReducer});

const store = createStore(rootReducer);

export default store;