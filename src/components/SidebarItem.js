import React from 'react';

export default ({ type, ports, properties }) => {
  return (
    <div
      className="sidebar-item"
      draggable
      onDragStart={event => {
        event.dataTransfer.setData(
          'react-flow-chart',
          JSON.stringify({ type, ports, properties })
        );
      }}
    >
      {type}
    </div>
  );
};
