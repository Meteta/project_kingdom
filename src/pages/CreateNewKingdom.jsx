import React, { useState } from 'react';
import "../css/CreateNewKingdom.css";
import { Link } from 'react-router-dom';
import kingdomNames from '../components/lists/kingdomNames';


class CreateNewKingdom extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            placeholderKingdom: kingdomNames[Math.floor(Math.random() * kingdomNames.length)],
            kingdomName: ""
        }
    }
    

    placeholderReset = () => {
        this.setState({ placeholderKingdom: kingdomNames[Math.floor(Math.random() * kingdomNames.length)] })
    }

    setKingdomName = () => {
        console.log(this.state.kingdomName);
        this.setState({ kingdomName: document.getElementById("kingdomName").value ?? this.placeholderKingdom})
    }
    

    render(){
    return (
      <div className='wrapper_CNK'>
        <h1>Project Kingdom</h1>
        <label> 
            Kingdom Name:
            <input i='kingdomName' type='text' placeholder={this.state.placeholderKingdom} className="input_text" ></input>
            <button onClick={ this.placeholderReset }>Randomize</button>
        </label>

        <Link to={{pathname:'/overview', state: this.state}} className='menu_button_primary' onClick={ this.setKingdomName }>Found Kingdom</Link>
      </div>
    );
  }
}
  
  export default CreateNewKingdom;