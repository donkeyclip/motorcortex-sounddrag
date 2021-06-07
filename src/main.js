import Track from './Incidents/Track';

import {name,version}  from '../package.json'

export default {
  npm_name: name, // don't touch this
  version: version, // don't touch this
  incidents: [
    {
      exportable: Track,
      name: "Track",
      originalDims: {
        width: "600px",
        height: "400px"
      }
    }
  ]
};