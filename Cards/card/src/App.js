
import './App.css';
import 'bulma/css/bulma.css';
import React from 'react'
import Angular from './images/cat.jpeg'
import view from './images/wiew.jpeg'
import bright from './images/bright.jpeg'
import { Course } from './Course';


function App ()  {
  
    return (
      <div className="App">
        <section className="hero is-danger">
  <div className="hero-body">
    <p className="title">
      Card project
    </p>
   
  </div>
</section>
        <div className='container'>
          <section className='section'>


          </section>

          <div className='columns'>
            <div className='column'>
        <Course image={Angular} title="Angular" description="Lorem, ipmus  dolar sit amet consectetur"/>
              
            </div>
            <div className='column'>
        <Course image={bright} title="Bootstrap" description="Lorem, ipmus  dolar sit amet consectetur"/>
              
            </div>
            <div className='column'>
        <Course image={view} title="Bacend" description="Lorem, ipmus  dolar sit amet consectetur"/>
              
              </div>
              <div className='column'>
        <Course image={Angular} title="Frontend" description="Lorem, ipmus  dolar sit amet consectetur"/>
              
              </div>
          </div>
        </div>
        
        


      </div>
    );
  }


export default App;
