/* eslint-disable react/forbid-prop-types */
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
import Players from '../Players';
import uiActions from '../../redux/actions/action_ui';
import styles from './Games.module.css';

function Games(props) {
  const {
    open,
    toggleGames,
    container,
    selectedPlayer,
  } = props;

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
            <TableCell align="center">Jugador 1</TableCell>
            <TableCell align="center">Jugador 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(selectedPlayer.games).map((game, index) => (
            <TableRow key={index}>
              <TableCell align="center">
                {`${selectedPlayer.name} (${game.pointsScored})`}
              </TableCell>
              <TableCell align="center">{`${game.opponent}% (${game.pointsAllowed})`}</TableCell>
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
  container: PropTypes.shape({ current: PropTypes.instanceOf(Players) }).isRequired,
  selectedPlayer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.showMatches,
  selectedPlayer: state.game.selectedPlayer,
});

const mapDispatchToProps = (dispatch) => {
  const { toggleGames } = uiActions.creators;

  return bindActionCreators({
    toggleGames,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Games));
