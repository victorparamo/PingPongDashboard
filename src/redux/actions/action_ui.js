const TOGGLE_MATCHES = 'UI/TOGGLE_MATCHES';

const toggleGames = (payload = {}) => ({
  type: TOGGLE_MATCHES,
  payload,
});

export default {
  types: {
    TOGGLE_MATCHES,
  },
  creators: {
    toggleGames,
  },
};
