/**
 * Created by apple on 2017/4/25.
 */
import Express from 'express'
import React from 'react'


let server = new Express();

import * as MyApi from './api/index'
server.get('/api/v1/topology/world-topo', MyApi.getTopologyTrials);
