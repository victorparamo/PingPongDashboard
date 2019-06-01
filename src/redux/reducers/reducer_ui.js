import uiActions from '../actions/action_ui';

const initialState = {
  showMatches: false,
};

export default ((state = initialState, action) => {
  const {
    type,
  } = action;

  switch (type) {
    case uiActions.types.TOGGLE_MATCHES:
      return {
        ...state,
        showMatches: !state.showMatches,
      };

    default:
      return state;
  }
});
