import React from 'react';
import '../components/ResultsScreen.css';


const ResultsScreen = ({ selectedOptions, categories }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <strong>{category}:</strong> {selectedOptions[category]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsScreen;
