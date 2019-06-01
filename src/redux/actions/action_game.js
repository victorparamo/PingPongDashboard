const SET_SELECTED_PLAYER = 'GAME/SET_SELECTED_PLAYER';

const setSelectedPlayer = (payload = {}) => ({
  type: SET_SELECTED_PLAYER,
  payload,
});

export default {
  types: {
    SET_SELECTED_PLAYER,
  },
  creators: {
    setSelectedPlayer,
  },
};
