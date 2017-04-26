/**
 * Created by Administrator on 2017/3/22.
 */
import React,{Component} from 'react';
import {Route, Router, hashHistory, IndexRedirect} from 'react-router';

import App from '../App';
import Reactone from '../react1/react1.js';
import Reacttwo from '../react2/react2.js';
import Children from '../chileren/children.js';
import Home from '../home/home.js';

class TestRouter extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRedirect to='/react2'></IndexRedirect>
                    <Route path='react1' component={Reactone}></Route>
                    <Route path='react2' component={Reacttwo}></Route>
                    <Route path='Children' component={Children}></Route>
                    <Route path='home' component={Home}></Route>
                </Route>
            </Router>
        )
    }
}

export default TestRouter;