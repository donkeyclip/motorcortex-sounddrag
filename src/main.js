import Track from "./Incidents/Track";

import { name, version } from "../package.json";

export default {
  npm_name: name, 
  version: version,
  incidents: [
    {
      exportable: Track,
      name: "Track",
      originalDims: {
        width: "600px",
        height: "400px",
      },
      attributesValidationRules: {
        name: {
          type: "string",
          optional: false,
        },
        startFrom: {
          type: "number",
          optional: true,
        },
        duration: {
          type: "number",
          optional: true,
        },
        fadeIn: {
          type: "boolean",
          optional: true,
        },  
        fadeOut: {
          type: "boolean",
          optional: true,
        },
      }
    },
  ],
};
