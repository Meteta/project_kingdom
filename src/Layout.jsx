import React from "react";
import {Outlet} from "react-router-dom";

class Layout extends React.Component {

    render(){
    return (
        <div className="App">
            <Outlet/>
        </div>
    );
    }
};

export default Layout;