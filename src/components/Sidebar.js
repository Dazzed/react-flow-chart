import React from 'react';
import SidebarItem from './SidebarItem';
import { sidebarItems } from '../config/constants';

export default ({ chart, stateActions }) => (
  <div className="sidebar">
    <div className="message">Drag and drop these items onto the canvas.</div>
    {sidebarItems.map(sidebarItem => (
      <SidebarItem type={sidebarItem.type} ports={sidebarItem.ports} />
    ))}

    <br />
    {chart.selected.type ? (
      <div className="message">
        <div>Type: {chart.selected.type}</div>
        <div>ID: {chart.selected.id}</div>
        <br />
        <div className="button" onClick={() => stateActions.onDeleteKey({})}>
          Delete
        </div>
      </div>
    ) : (
      <div className="message">Click on a Node, Port or Link</div>
    )}
  </div>
);
