import React, { Component } from 'react';
import { cloneDeep, mapValues } from 'lodash';
import { FlowChart, actions } from '@mrblenny/react-flow-chart';

import Sidebar from './components/Sidebar';
import { defaultChart } from './config/constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = cloneDeep(defaultChart);

    this.setNodeInnerText = this.setNodeInnerText.bind(this);
  }

  setNodeInnerText(id, text) {
    const nodes = this.state.nodes;

    if (nodes[id]) {
      nodes[id].type = text;
      this.setState({
        nodes,
      });
    }
  }

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
        <Sidebar
          chart={chart}
          stateActions={stateActions}
          setNodeInnerText={this.setNodeInnerText}
        />
      </div>
    );
  }
}

export default App;
