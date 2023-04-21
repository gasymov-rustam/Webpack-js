import { Provider } from 'react-redux';

import { createReduxStore } from '../../store';

export const StoreProvider = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
