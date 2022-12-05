import React from 'react';
import "../css/Overview.css";
import { Link } from 'react-router-dom';



class Overview extends React.Component {

    render(){
        return (
        <div className='wrapper'>
            <Link to="/mainmenu" className='title'><h1>{ false ?  this.state.kingdomName : "Project Kingdom"}</h1></Link>
            <div className='display_area'></div>
        </div>
        );
    }
}
  
  export default Overview;