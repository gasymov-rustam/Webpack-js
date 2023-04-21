import { fetchStatusesMap } from './fetchStatusesMap';

export const setLoading = (state) => {
  state.error = null;
  state.status = fetchStatusesMap.PENDING;
};
