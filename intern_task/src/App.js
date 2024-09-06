import React from 'react';
import UploadPDFComponent from './components/UploadPDF';
import AskQuestionComponent from './components/AskQue';
import QueryDatabaseComponent from './components/QueryDb';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>FastAPI and React Integration</h1>
      <UploadPDFComponent />
      <AskQuestionComponent />
      <QueryDatabaseComponent />
    </div>
  );
}

export default App;
