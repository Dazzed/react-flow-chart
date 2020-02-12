import React, { Component } from 'react';
import { cloneDeep, mapValues } from 'lodash';
import { FlowChart, actions } from '@mrblenny/react-flow-chart';

import Page from './components/Page';
import Content from './components/Content';
import DragAndDropSidebar from './containers/DragAndDropSidebar';
import { chartSimple } from './containers/misc/exampleChartState';

class App extends Component {
  state = cloneDeep(chartSimple);

  render() {
    const chart = this.state;
    const stateActions = mapValues(actions, func => (...args) =>
      this.setState(func(...args))
    );

    return (
      <Page>
        <Content>
          <FlowChart chart={chart} callbacks={stateActions} />
        </Content>
        <DragAndDropSidebar chart={chart} stateActions={stateActions} />
      </Page>
    );
  }
}

export default App;
