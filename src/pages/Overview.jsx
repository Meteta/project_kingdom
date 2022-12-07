import React from 'react';
import "../css/Overview.css";
import { Link } from 'react-router-dom';
import CreateNewKingdom from './subpages/CreateNewKingdom';
import PopReader from '../components/data/populationReader';


// Setting up the kingdom Data. This should just be raw numbers, races, buildings etc and their effects are not defined here.
let kingdomData = {
    name: '',
    population: {
        sylvan:{
            highElf: 0,
            woodElf: 0,
            darkElf: 0,
        }
    },
    buildings: {
        housing:{
            makeshift: 0,
            housePoor: 0,
            houseAverage: 0,
            houseRich: 0,
        },
        commerce:{
            marketStall: 0,
            tavern: 0,
        }
    }
}

class Overview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newGame: !kingdomData.name
        }
    }

    // When setting up a new game the kingdom is named using this function 
    setKingdomName(placeholderKingdom){
        kingdomData.name = document.getElementById("kingdomName")?.value ?? placeholderKingdom
        console.log(kingdomData.name);
        this.setState({ newGame: false })
    }

    render(){
        return (
        <div className='wrapper'>
            {this.state.newGame ? 
                <CreateNewKingdom setKingdomName={ this.setKingdomName.bind(this) }/> :
                <>
                    <Link to="/mainmenu" className='title'><h1>{ kingdomData.name ?  kingdomData.name : "Project Kingdom"}</h1></Link>
                    <div className='display_area'>
                        <PopReader/>

                    </div>
                </>
            }
        </div>
        );
    }
}
  
  export default Overview;