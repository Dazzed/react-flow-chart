export const defaultChart = {
  offset: {
    x: 0,
    y: 0,
  },
  nodes: {
    node1: {
      id: 'node1',
      type: 'output-only',
      position: {
        x: 300,
        y: 100,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'output',
          properties: {
            value: 'yes',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            value: 'no',
          },
        },
      },
    },
    node2: {
      id: 'node2',
      type: 'input-output',
      position: {
        x: 300,
        y: 300,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
    node3: {
      id: 'node3',
      type: 'input-output',
      position: {
        x: 100,
        y: 600,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
    node4: {
      id: 'node4',
      type: 'input-output',
      position: {
        x: 500,
        y: 600,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
  },
  links: {
    link1: {
      id: 'link1',
      from: {
        nodeId: 'node1',
        portId: 'port2',
      },
      to: {
        nodeId: 'node2',
        portId: 'port1',
      },
      properties: {
        label: 'example link label',
      },
    },
    link2: {
      id: 'link2',
      from: {
        nodeId: 'node2',
        portId: 'port2',
      },
      to: {
        nodeId: 'node3',
        portId: 'port1',
      },
      properties: {
        label: 'another example link label',
      },
    },
    link3: {
      id: 'link3',
      from: {
        nodeId: 'node2',
        portId: 'port2',
      },
      to: {
        nodeId: 'node4',
        portId: 'port1',
      },
    },
  },
  selected: {},
  hovered: {},
};

export const sidebarItems = [
  {
    type: 'Top bottom ports',
    ports: {
      port1: {
        id: 'port1',
        type: 'top',
      },
      port2: {
        id: 'port2',
        type: 'bottom',
      },
    },
  },
  {
    type: 'Bottom port',
    ports: {
      port1: {
        id: 'port1',
        type: 'bottom',
      },
    },
  },
  {
    type: 'Left right ports',
    ports: {
      port1: {
        id: 'port1',
        type: 'left',
      },
      port2: {
        id: 'port2',
        type: 'right',
      },
    },
  },
  {
    type: 'Four side ports',
    ports: {
      port1: {
        id: 'port1',
        type: 'left',
      },
      port2: {
        id: 'port2',
        type: 'right',
      },
      port3: {
        id: 'port3',
        type: 'top',
      },
      port4: {
        id: 'port4',
        type: 'bottom',
      },
    },
  },
  {
    type: 'Four side multi port',
    ports: {
      port1: {
        id: 'port1',
        type: 'left',
      },
      port2: {
        id: 'port2',
        type: 'right',
      },
      port3: {
        id: 'port3',
        type: 'top',
      },
      port4: {
        id: 'port4',
        type: 'bottom',
      },
      port5: {
        id: 'port5',
        type: 'left',
      },
      port6: {
        id: 'port6',
        type: 'right',
      },
      port7: {
        id: 'port7',
        type: 'top',
      },
      port8: {
        id: 'port8',
        type: 'bottom',
      },
      port9: {
        id: 'port9',
        type: 'left',
      },
      port10: {
        id: 'port10',
        type: 'right',
      },
      port11: {
        id: 'port11',
        type: 'top',
      },
      port12: {
        id: 'port12',
        type: 'bottom',
      },
    },
  },
];
