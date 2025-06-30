import React from 'react';

export default function MoodDisplay({ mood }) {
  const moods = {
    happy: "Keep smiling! 😄",
    sad: "It is okay to be sad sometimes 😒",
    excited: "Let's celebrate! 😍",
    angry: "Take a deep breath 😡",
  };

  return (
    <div className='box'>
     
      {mood ? <p>{moods[mood]}</p> : <p>Click on a button!</p>}
    </div>
  );
}
