import React, { useState } from 'react';
import axios from 'axios';
import '../css/AskQue.css';

const AskQuestionComponent = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setResponse('Please enter a valid question.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/ask_pdf/', { question });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error getting response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ask Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        disabled={loading}
      />
      <button onClick={handleAskQuestion} disabled={loading}>
        {loading ? 'Asking...' : 'Ask'}
      </button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default AskQuestionComponent;
