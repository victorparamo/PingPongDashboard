import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';
import styles from './Games.module.css';

function Games(props) {
  const {
    open,
    toggleDrawer,
    container,
  } = props;

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

  function handleToggleDrawer() {
    toggleDrawer();
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
  toggleDrawer: PropTypes.func.isRequired,
};

export default Games;
