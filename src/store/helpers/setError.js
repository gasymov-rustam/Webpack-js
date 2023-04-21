import { fetchStatusesMap } from './fetchStatusesMap';

export const setError = (state, { payload }) => {
  state.error = payload;
  state.status = fetchStatusesMap.REJECTED;
};
