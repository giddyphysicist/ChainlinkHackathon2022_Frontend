module.exports = {
  abi: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_x',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_y',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_qsign',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_qnum',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'getDY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getQnum',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getQnumString',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getX',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_dx',
          type: 'uint256',
        },
      ],
      name: 'swapXforY',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_dy',
          type: 'uint256',
        },
      ],
      name: 'swapYforX',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_x',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_y',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_qsign',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_qnum',
          type: 'uint256',
        },
      ],
      name: 'updateK',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_qsign',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_qnum',
          type: 'uint256',
        },
      ],
      name: 'updateQ',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
