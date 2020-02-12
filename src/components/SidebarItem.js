import React from 'react';
import styled from 'styled-components';
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart';

const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
`;

export default ({ type, ports, properties }) => {
  return (
    <Outer
      draggable
      onDragStart={event => {
        console.log('onDragStart', event);

        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        );
      }}
      onDragEnd={event => {
        console.log('onDragEnd', event);

        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        );
      }}
    >
      {type}
    </Outer>
  );
};
