import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Layout from "./Layout";
import MainMenu from "./pages/MainMenu";
import Overview from "./pages/Overview";
import CreateNewKingdom from "./pages/CreateNewKingdom";
import React from "react";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        placeholderKingdom: "",
        kingdomName: ""
    }
}
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainMenu />} />
            <Route path="mainMenu" element={<MainMenu />} />
            <Route path="overview" element={<Overview />} />
            <Route path="createKingdom" element={<CreateNewKingdom/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));