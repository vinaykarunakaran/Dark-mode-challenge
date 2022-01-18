import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
import { ThemeProvider } from 'styled-components';
import {lightMode, darkMode , GlobalStyles} from './themes.js';


function App() {

  //state to store type of theme
  const [mode,setMode] = useState("light");

  //func to change theme on button click
  const modeChange = () =>{
    if (mode == "light" ){
      setMode("dark" );
    }
    else{
      setMode("light" );
    }
  }

  return (
    <div className = "overview">
      {/* theme provider to change overall theme */}
      <ThemeProvider theme= { mode == "light" ? lightMode:  darkMode } >

        {/* using global styles to change style for entire view/page based on the value of mode(light or dark) */}
        <GlobalStyles/> 

        <div className="app">
          <div className="level">
            <div>
              <h1 className ="title">Dark Mode Challenge</h1>
            </div>

            <div>
              {mode == "light"
                ? <button className="app__dark-mode-btn icon level-right" onClick={() => modeChange()} ><FontAwesomeIcon icon={faMoon} /></button>
                : <button className="app__dark-mode-btn icon level-right" onClick={() => modeChange()} ><FontAwesomeIcon icon={faSun} /></button>
              }
            </div>

  
          </div>

          <div className="columns">
            <div className="column">
              <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
            </div>
            <div className="column">
              <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Name" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Email" />
            </div>
          </div>

          <section className="section">
            <div className="buttons level-right">
              <a className="button is-primary">Save</a>
              <a className="button is-link"><span className="submit">Submit</span></a>
            </div>
          </section>
        </div> 
      </ThemeProvider>
    </div>
  );
}

export default App;
