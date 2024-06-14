// /components/Header.jsx
import React from 'react';

const Header = ({ batchName }) => {
  return (
    <header style={styles.header}>
      <img src="/path/to/logo.png" alt="PN Logo" style={styles.logo} />
      <h1 style={styles.title}>Page Title</h1>
      <p style={styles.batchName}>Batch: {batchName}</p>
    </header>
  );
};

