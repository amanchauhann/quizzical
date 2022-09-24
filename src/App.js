import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.js'
import { useState } from 'react';

function App() {
  const[isStart, setIsStart] = useState(false)

  const startQuiz = () => setIsStart(true)

  return (
    <div className="App">
      {!isStart && <div>
        <h1>Quizzical</h1>
        <button onClick={startQuiz}>Start Quiz</button>
      </div>}
      
      {isStart && <Quiz />}
    </div>
  );
}

export default App;
