import'./Language.css';
import React, {} from 'react';

import All from './images/all.jpeg';
import View from './images/wiew.jpeg';
import C from './images/c#.jpeg';
import Cat from './images/cat.jpeg';
import Python from './images/python.jpeg';
import Css from './images/css.png';
import Java from './images/java.png';

const languageMap ={
    All, View, C, Cat, Python, Css, Java
}


function Language({languageName}) {
    // console.log(All); 
    // console.log(languageName);
    console.log(languageMap[languageName]);
    return <div className='languageDiv'> 
        <img  className="language" src={languageMap[languageName]} alt=''/>
    </div>;
}


export default Language;