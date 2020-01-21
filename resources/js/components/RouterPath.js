import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home.js";
import Club from "./pages/Club.js";
import SelectClub from "./pages/SelectClub.js";
import User from "./pages/User.js";
import AddClub from "./pages/AddClub.js";
import EditClub from "./pages/EditClub.js";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/user' component={User}/>
                    <Route exact path='/club' component={Club}/>
                    <Route exact path='/select-club' component={SelectClub}/>
                    <Route exact path='/addclub' component={AddClub}/>
                    <Route exact path='/club/:id' component={EditClub}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath