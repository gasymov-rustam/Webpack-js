import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { decrementReducer, decrementSliceName } from './slices';

export function createReduxStore() {
  const rootReducers = {
    [decrementSliceName]: decrementReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    middleware: __IS_DEV__ ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) : undefined,
  });

  return store;
}
