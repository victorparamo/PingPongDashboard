import gameActions from '../actions/action_game';

const initialState = {
  players: {
    'Tony Stark': {
      name: 'Tony Stark',
      percentage: 66,
      games: {
        game1: {
          pointsScored: 2,
          pointsAllowed: 1,
          opponent: 'Steve Rogers',
        },
        game2: {
          pointsScored: 2,
          pointsAllowed: 1,
          opponent: 'Natalia Romanova',
        },
        game3: {
          pointsScored: 1,
          pointsAllowed: 2,
          opponent: 'Natalia Romanova',
        },
      },
    },
    'Steve Rogers': {
      name: 'Steve Rogers',
      percentage: 50,
      games: {
        game1: {
          pointsScored: 1,
          pointsAllowed: 2,
          opponent: 'Tony Stark',
        },
        game2: {
          pointsScored: 2,
          pointsAllowed: 1,
          opponent: 'Natalia Romanova',
        },
      },
    },
    'Natalia Romanova': {
      name: 'Natalia Romanova',
      percentage: 33,
      games: {
        game1: {
          pointsScored: 1,
          pointsAllowed: 2,
          opponent: 'Tony Stark',
        },
        game2: {
          pointsScored: 2,
          pointsAllowed: 1,
          opponent: 'Tony Stark',
        },
        game3: {
          pointsScored: 1,
          pointsAllowed: 2,
          opponent: 'Steve Rogers',
        },
      },
    },
  },

  selectedPlayer: {},
};

export default ((state = initialState, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case gameActions.types.SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: payload,
      };

    default:
      return state;
  }
});
