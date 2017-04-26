/**
 * Created by Administrator on 2017/3/22.
 */
import React, { Component } from 'react';
import {Link,IndexLink } from 'react-router';
// import axios from 'axios';
// import superAgent from 'superagent'
// import * as globalActions from 'actions/global'

import './App.css'


class App extends Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><IndexLink to="" activeClassName='active'>App</IndexLink></li>
                                <li><Link to="react1" activeStyle={{background: 'red'}}>Reactone</Link></li>
                                <li><Link to="react2" activeClassName='active'>Reacttwo</Link></li>
                                <li><Link to="children" activeClassName='active'>children</Link></li>
                                <li><Link to="home" activeClassName='active'>home</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;