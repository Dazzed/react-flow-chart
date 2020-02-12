import React from 'react';
import SidebarItem from './SidebarItem';
import { sidebarItems } from '../config/constants';

export default ({ chart, stateActions, setNodeInnerText }) => (
  <div className="sidebar">
    <div className="message">Drag and drop these items onto the canvas.</div>
    {sidebarItems.map((sidebarItem, i) => (
      <React.Fragment>
        <SidebarItem
          key={i}
          type={sidebarItem.type}
          ports={sidebarItem.ports}
        />
        <hr />
      </React.Fragment>
    ))}

    <br />
    {chart.selected.type ? (
      <React.Fragment>
        <div className="message">
          <div>Change node type</div>
          <input
            className="text-input"
            name="node_type"
            value={chart.nodes[chart.selected.id].type}
            onChange={e => {
              setNodeInnerText(chart.selected.id, e.target.value);
            }}
          />
        </div>
        <div className="message">
          <div>Type: {chart.nodes[chart.selected.id].type}</div>
          <div>ID: {chart.selected.id}</div>
          <br />
          <div
            className="delete-button"
            onClick={() => {
              stateActions.onDeleteKey({});
            }}
          >
            Delete
          </div>
        </div>
      </React.Fragment>
    ) : (
      <div className="message">Click on a Node, Port or Link</div>
    )}
  </div>
);
