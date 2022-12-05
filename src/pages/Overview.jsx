import React from 'react';
import "../css/Overview.css";
import { Link } from 'react-router-dom';

function Overview() {
    return (
      <div className='wrapper'>
        <Link to="/mainmenu" className='title'><h1>Project Kingdom</h1></Link>
        <div className='display_area'></div>
      </div>
    );
  }
  
  export default Overview;