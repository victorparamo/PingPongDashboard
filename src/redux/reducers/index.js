import { combineReducers } from 'redux';
import ui from './reducer_ui';
import game from './reducer_game';

export default combineReducers({
  ui,
  game,
});
