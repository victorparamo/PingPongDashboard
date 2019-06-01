import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Games from '../Games';
import uiActions from '../../redux/actions/action_ui';
import styles from './Players.module.css';

class Players extends PureComponent {
  render() {
    const players = [
      {
        name: 'Tony Stark',
        percentage: 90,
      },
      {
        name: 'Steve Rogers',
        percentage: 90,
      },
      {
        name: 'Natalia Romanova',
        percentage: 90,
      },
    ];

    const {
      open,
      toggleGames,
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
              <TableRow key={player.name}>
                <TableCell align="center">
                  {player.name}
                </TableCell>
                <TableCell align="center">{`${player.percentage}%`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button onClick={() => toggleGames()}>Soy un boton</Button>
        <Games
          container={this}
          open={open}
          toggleDrawer={() => toggleGames()}
        />
      </div>
    );
  }
}

Players.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleGames: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.showMatches,
});

const mapDispatchToProps = (dispatch) => {
  const { toggleGames } = uiActions.creators;

  return bindActionCreators({
    toggleGames,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Players);
