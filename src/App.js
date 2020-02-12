import React, { Component } from 'react';
import { FlowChartWithState } from '@mrblenny/react-flow-chart';

import Page from './components/Page';
import Content from './components/Content';
import DragAndDropSidebar from './containers/DragAndDropSidebar';
import { chartSimple } from './containers/misc/exampleChartState';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartSimple: chartSimple,
    };
  }

  render() {
    return (
      <Page>
        <Content>
          <FlowChartWithState initialValue={this.state.chartSimple} />
        </Content>
        <DragAndDropSidebar />
      </Page>
    );
  }
}

export default App;
