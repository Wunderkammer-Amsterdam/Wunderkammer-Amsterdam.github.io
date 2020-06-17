export default [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#ffe24d',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#a7deae',
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        color: '#e3effd',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: 'rgb(77,255,127,0.17)',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#333333',
      },
      {
        gamma: 9.91,
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#333333',
      },
      {
        lightness: 100,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
