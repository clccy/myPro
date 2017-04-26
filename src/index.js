/**
 * Created by Administrator on 2017/3/22.
 */
import React from 'react';
import ReactDom from 'react-dom';

import TestRouter from './router/myrouter.js'
import './index.css';
//import './css/bootstrap.min.css'

ReactDom.render(
    <div>
       <TestRouter/>
    </div>
    ,document.getElementById('example')
)
