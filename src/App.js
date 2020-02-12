import React, { Component } from 'react';
import { cloneDeep, mapValues } from 'lodash';
import { FlowChart, actions } from '@mrblenny/react-flow-chart';

import Sidebar from './components/Sidebar';
import { defaultChart } from './config/constants';

class App extends Component {
  state = cloneDeep(defaultChart);

  render() {
    const chart = this.state;
    const stateActions = mapValues(actions, func => (...args) =>
      this.setState(func(...args))
    );

    return (
      <div className="page-content">
        <div className="content">
          <FlowChart chart={chart} callbacks={stateActions} />
        </div>
        <Sidebar chart={chart} stateActions={stateActions} />
      </div>
    );
  }
}

export default App;
