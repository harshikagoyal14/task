import React, { useState } from 'react';
import axios from 'axios';
import '../css/QueryDb.css';

const QueryDatabaseComponent = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleQueryDB = async () => {
    try {
      const res = await axios.post('http://localhost:8000/query_db/', { question: query }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const flattenedResult = res.data.result.flat()[0];
      setResult(flattenedResult);
      setError('');
    } catch (error) {
      setError('Error querying database');
      setResult(null);
    }
  };

  return (
    <div>
      <h2>Query Database</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query..."
      />
      <button onClick={handleQueryDB}>Query</button>
      {error && <p>{error}</p>}
      {result !== null && (
        <div>
          <h3>Query Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default QueryDatabaseComponent;
