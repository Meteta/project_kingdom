import React, { useState } from 'react';
import "../css/CreateNewKingdom.css";
import { Link } from 'react-router-dom';
import kingdomNames from '../components/data/kingdomNames';


class CreateNewKingdom extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            placeholderKingdom: kingdomNames[Math.floor(Math.random() * kingdomNames.length)]
        }
    }
    

    placeholderReset = () => {
        this.setState({ placeholderKingdom: kingdomNames[Math.floor(Math.random() * kingdomNames.length)] })
    }
    

    render(){
    return (
      <div className='wrapper_CNK'>
        <h1>Project Kingdom</h1>
        <label> 
            Kingdom Name:
            <input i='kingdomName' type='text' placeholder={this.state.placeholderKingdom} className="input_text"></input>
            <button onClick={ this.placeholderReset }>Randomize</button>
        </label>

        <Link to='/Overview' className='menu_button_primary'>Found Kingdom</Link>
      </div>
    );
  }
}
  
  export default CreateNewKingdom;