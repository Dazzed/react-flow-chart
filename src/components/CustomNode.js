import React from 'react';

export default ({ node, config }) => {
  return (
    <div className="sidebar-item">
      <p>{node.type}</p>
    </div>
  );
};
