// App.jsx

import React from 'react';
import Header from './components/Header';
import Scores from './components/Scores';
import './Scores.css';
import './Header.css';
import { HTML_RESULTS, CSS_RESULTS } from './data'; // Import data

const App = () => {
  return (
    <div className="App">
      <Header batchName="Student result for PNC batch 2024" />
      <main>
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="CSS" courseResults={CSS_RESULTS} />
      </main>
    </div>
  );
};

export default App;
