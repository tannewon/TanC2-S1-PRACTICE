
import React from 'react';
import PropTypes from 'prop-types';
import '../Scores.css'; 

const Scores = ({ courseName, courseResults }) => {
  return (
    <div className="scores">
      <h2>{`Course: ${courseName}`}</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Scores.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseResults: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Scores;
