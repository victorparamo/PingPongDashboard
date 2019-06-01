import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import styles from './Header.module.css';

function Header(props) {
  const {
    open,
  } = props;

  return (
    <div className={styles.root}>
      {!open ? (
        <>
          <Typography classes={{ root: styles.firstButton }}>
            Matches
          </Typography>
          <Typography classes={{ root: styles.secondButton }}>
            New Game
          </Typography>
        </>
      ) : (
        <Typography classes={{ root: styles.gamesButton }}>
          Juegos
        </Typography>
      )}
    </div>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.showMatches,
});

export default connect(mapStateToProps)(memo(Header));
