import './App.css';
import { useState } from 'react';
import MoodDisplay from './MoodDisplay'; // make sure the path is correct

function App() {
  const [mood, setMood] = useState("");

  return (
    <div className={`container ${mood}`}>
      <h1>How are you feeling today?</h1>
      <button className='btn happy' onClick={() => setMood("happy")}>😄 Happy</button>
      <button className='btn sad' onClick={() => setMood("sad")}>😒 Sad</button>
      <button className='btn excited' onClick={() => setMood("excited")}>😍 Excited</button>
      <button className='btn angry' onClick={() => setMood("angry")}>😡 Angry</button>
      
     
      <MoodDisplay mood={mood} />
    </div>
  );
}

export default App;
