import React, {  useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0)

  const handleClick = () =>{
    setValue(value +1);
    console.log('Mehmet');
  };
  return <div className='App'> 
  <button onClick={handleClick}>count</button>
  <div>increment : {value}</div></div>
}

export default App;
