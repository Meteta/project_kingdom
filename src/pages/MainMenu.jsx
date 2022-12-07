import React from 'react';
import "../css/MainMenu.css";
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
      <div className="menu_main">
        <h1>Project Kingdom</h1>
        <Link to={{pathname:"/overview" , state: { newGame: true }}} className="menu_button_primary">Begin Anew</Link>
        <Link to="/overview" className="menu_button_primary">Return to the Throne</Link>
      </div>
    );
  }
  
  export default MainMenu;