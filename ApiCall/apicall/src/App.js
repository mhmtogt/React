import React, {  } from 'react';
import axios from 'axios';
import './App.css';
import SearchHeader from './SearchHeader';

function App () {

  const  searchImages = (term) =>{
  const response = axios.get('https://unsplash.com/search/photos', {
    headers:{
      Authorizantion:'Client-ID eLC-MIduiJTrBlg76HA8LdkyM5dljwSZy7Ay35HvlAc'
    },
    params:{
      query:term
    }
  })
  debugger; // debuggers is for chack yor code
  return response;
   }
   

   const handleSubmit = (term) =>{
   console.log(term);
   searchImages(term);
  }
  
    return (
      <div className="App">
        <SearchHeader search={handleSubmit}/>
      </div>
    );
  
}

export default App;
