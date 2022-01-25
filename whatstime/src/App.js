import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <a
          className="App-link"
          href="https://github.com/PrajjwalDatir"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatNow? 🕒
        </a>
        
        <p>
          Today is {new Date().toLocaleDateString()}
        </p>
        <p>
          Time is {new Date().toLocaleTimeString()}
        </p>

      </header>
    </div>
  );
}

export default App;
