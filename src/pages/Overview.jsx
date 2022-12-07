import React from 'react';
import "../css/Overview.css";
import { Link } from 'react-router-dom';
import CreateNewKingdom from './subpages/CreateNewKingdom';
import PopReader from '../components/data/populationReader';
import { observer } from "mobx-react-lite"

// Setting up the kingdom Data. This should just be raw numbers, races, buildings etc and their effects are not defined here.

let kingdomData = {
    name: '',
    population: {
        sylvan:{
            highElf: 2,
            woodElf: 4,
            darkElf: 1,
        },
        human:{
            human:0,
            halfling:0,
            giant:0,
        },
        dwarven:{
            hillDwarf:0,
            greyDwarf:0,
            darkDwarf:0,
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
            newGame: !kingdomData.name,
            kingdomData: kingdomData
        }
    }

    // When setting up a new game the kingdom is named using this function 
    setKingdomName(placeholderKingdom){
        // kingdomData.name = document.getElementById("kingdomName")?.value ?? placeholderKingdom
        // console.log(kingdomData.name);
        this.setState({ newGame: false, kingdomData: {name: document.getElementById("kingdomName")?.value ?? placeholderKingdom }})
        console.log(this.state.kingdomData.name)
    }

    componentDidUpdate() {
        if (kingdomData !== this.state.kingdomData) {
          this.setState({kingdomData: kingdomData});
        }
      }

    render(){
        return (
        <div className='wrapper'>
            {this.state.newGame ? 
                <CreateNewKingdom setKingdomName={ this.setKingdomName.bind(this) }/> :
                <>
                    <Link to="/mainmenu" className='title'><h1>{ this.state.kingdomData.name ?  this.state.kingdomData.name : "Project Kingdom"}</h1></Link>
                    <div className='display_area'>
                        <PopReader kingdomPop={kingdomData.population}/>
                        

                        <div>
                            <h4>Population Controls</h4>
                            <button onClick={() => {kingdomData.population.human.human++; console.log(kingdomData.population.human.human);}}> Spawn Human</button>
                        </div>
                    </div>
                </>
            }
        </div>
        );
    }
}
  
  export default Overview;