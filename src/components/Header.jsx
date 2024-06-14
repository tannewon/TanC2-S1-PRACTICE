
import React from 'react';
import PropTypes from 'prop-types';
import '../Header.css'; 

const Header = ({ batchName }) => {
  return (
    <header className="header">
      <img src="./src/assets/pn-logo.png" alt="PN Logo" className="logo" />
      <h1>{`Batch: ${batchName}`}</h1>
    </header>
  );
};

Header.propTypes = {
  batchName: PropTypes.string.isRequired,
};

export default Header;
