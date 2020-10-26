import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {mapValues} from 'lodash';
import * as reducers from './reducers';
import storage from 'redux-persist/lib/storage';

const appReducers = {
  ...mapValues(reducers, 'reducers'),
};

const appReducer = combineReducers(appReducers);
const rootReducer = (
  state: any,
  action: {
    type: '';
  },
) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form'], // Names of reducers which will be persisted.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, logger),
);
export const persistor = persistStore(store);
