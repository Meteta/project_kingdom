import React from 'react';
import '../../css/tabs/popReader.css';

class PopReader extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sylvan: false,
            dwarves: false,
            humans: false,
            pops: this.props.kingdomPop
        }
    }

    componentDidMount(){
        // Make the DIV element draggable:

        dragElement(document.getElementById("draggablePop"), document.getElementById("display_area"));
    }
    
    render(){
        let sylvans = this.state.pops.sylvan;
        let humans = this.state.pops.human;
        let dwarves = this.state.pops.dwarven;
        return (
        <div id="draggablePop" className='wrapper_POP'>
            <h2 className='popTitle'>Population</h2>
            <ul className='popReadOut'>
                {/* Sylvans */}
                <li onClick={ () => this.setState({sylvan: !this.state.sylvan}) } >
                    Sylvans: {Object.values(sylvans).reduce((a,b) => b + a , 0)}
                    <ul className={this.state.sylvan ? 'popAccordian' : 'popAccordianHidden'}>
                        <li>High Elves: ${sylvans.highElf}</li>
                        <li>Wood Elves: {sylvans.woodElf}</li>
                        <li>Dark Elves: {sylvans.darkElf}</li>
                    </ul>
                </li>
                {/* Humans */}
                <li onClick={ () => this.setState({humans: !this.state.humans}) } >
                    Humans: {Object.values(humans).reduce((a,b) => b + a , 0)}
                    <ul className={this.state.humans ? 'popAccordian' : 'popAccordianHidden'}>
                        <li>Human: {humans.human}</li>
                        <li>Halfling: {humans.halfling}</li>
                        <li>Giant: {humans.giant}</li>
                    </ul>
                </li>
                {/* Dwarves */}
                <li onClick={ () => this.setState({dwarves: !this.state.dwarves}) } >
                    Dwarves: {Object.values(dwarves).reduce((a,b) => b + a , 0)}
                    <ul className={this.state.dwarves ? 'popAccordian' : 'popAccordianHidden'}>
                        <li>Hill Dwarves: {dwarves.hillDwarf}</li>
                        <li>Grey Dwarves: {dwarves.greyDwarf}</li>
                        <li>Dark Dwarves: {dwarves.darkDwarf}</li>
                    </ul>
                </li>
            </ul>
        </div>
        );
    }
}

function dragElement(elmnt, container) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  export default PopReader;