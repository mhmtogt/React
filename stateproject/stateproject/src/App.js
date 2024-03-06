import React, { useState } from 'react';
import './App.css';
import Language from './Language';




function getRandomLanguage() {
  const languageArray = ['All', 'C', 'Css', 'Java', 'Cat', 'Python', 'View'];
  return languageArray[Math.floor(Math.random() * languageArray.length)];
}

function App() {
  const [languages, setLanguages] = useState([]);

  const handleClick = () => {
    setLanguages([...languages, getRandomLanguage()]);
  };

  const languageList =languages.map((language, index)=> {
    return <Language key={index} languageName={language}/> 
  });

  return (
    <div className='App'>
      <button className='appButton'  onClick={handleClick}>Add Languages</button>
      <div className='languageList'>{languageList}</div>
    </div>
  );
}

export default App;
