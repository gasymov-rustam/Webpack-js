export const reducers = {
  setDecrementValue: (state, { payload }) => {
    state.value -= payload;
  },
};
