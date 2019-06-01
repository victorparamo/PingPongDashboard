import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';
import uiActions from '../../redux/actions/action_ui';
import styles from './Games.module.css';

function Games(props) {
  const {
    open,
    toggleGames,
    container,
    players,
  } = props;

  console.log("--->", players);

  // const players = [
  //   {
  //     name: 'Tony Stark',
  //     percentage: 90,
  //   },
  //   {
  //     name: 'Steve Rogers',
  //     percentage: 90,
  //   },
  //   {
  //     name: 'Natalia Romanova',
  //     percentage: 90,
  //   },
  // ];

  function handleToggleDrawer() {
    toggleGames();
  }

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={handleToggleDrawer}
      ModalProps={
        {
          className: styles.modal,
          hideBackdrop: true,
          container,
        }
      }
      PaperProps={
        {
          className: styles.paper,
        }
      }
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Jugador</TableCell>
            <TableCell align="center">% Juegos Ganados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(players).map(player => (
            <TableRow key={player.name}>
              <TableCell align="center">
                {player.name}
              </TableCell>
              <TableCell align="center">{`${player.percentage}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Drawer>
  );
}

Games.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleGames: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.showMatches,
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => {
  const { toggleGames } = uiActions.creators;

  return bindActionCreators({
    toggleGames,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Games));
