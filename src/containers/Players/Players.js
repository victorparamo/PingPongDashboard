/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Games from '../Games';
import uiActions from '../../redux/actions/action_ui';
import gameActions from '../../redux/actions/action_game';
import styles from './Players.module.css';

class Players extends PureComponent {
  handleOnClick(name) {
    const {
      players,
      setSelectedPlayer,
      toggleGames,
    } = this.props;

    const selectedPlayer = Map(players[name]);
    setSelectedPlayer(selectedPlayer.toJS());
    toggleGames();
  }

  render() {
    const {
      players,
    } = this.props;

    return (
      <div className={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Jugador</TableCell>
              <TableCell align="center">% Juegos Ganados</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(players).map(player => (
              <TableRow
                key={player.name}
                onClick={() => this.handleOnClick(player.name)}
              >
                <TableCell align="center">
                  {player.name}
                </TableCell>
                <TableCell align="center">{`${player.percentage}%`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Games container={this} />
      </div>
    );
  }
}

Players.propTypes = {
  players: PropTypes.object.isRequired,
  toggleGames: PropTypes.func.isRequired,
  setSelectedPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => {
  const { toggleGames } = uiActions.creators;
  const { setSelectedPlayer } = gameActions.creators;

  return bindActionCreators({
    toggleGames,
    setSelectedPlayer,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
