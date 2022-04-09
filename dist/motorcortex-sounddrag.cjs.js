'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

class MyHTMLClip extends motorcortex.AudioClip {
  get audioSources() {
    return [{
      src: "https://sounds.ams3.cdn.digitaloceanspaces.com/sounds_storage/public/".concat(this.attrs.name, ".mp3"),
      id: "track-id",
      base64: false
    }];
  }

  buildTree() {
    const duration = this.attrs.duration || +this.attrs.name.split("_")[1];
    const songPlayback = new motorcortex.AudioPlayback({
      selector: "~#track-id",
      startFrom: !this.attrs.startFrom ? 0 : this.attrs.startFrom,
      duration: duration
    });

    if (this.attrs.fadeIn === true) {
      const fadeIn = new motorcortex.AudioEffect({
        animatedAttrs: {
          gain: 1
        },
        initialValues: {
          gain: 0
        }
      }, {
        selector: "~#track-id",
        duration: Math.floor(duration * 0.25)
      });
      this.addIncident(fadeIn, 0);
    }

    if (this.attrs.fadeOut === true) {
      const fadeOut = new motorcortex.AudioEffect({
        animatedAttrs: {
          gain: 0
        },
        initialValues: {
          gain: 1
        }
      }, {
        selector: "~#track-id",
        duration: Math.floor(duration * 0.25)
      });
      this.addIncident(fadeOut, Math.floor(duration * 0.75));
    }

    this.addIncident(songPlayback, 0);
  }

}

var name = "@donkeyclip/motorcortex-sounddrag";
var version = "1.1.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: MyHTMLClip,
    name: "Track",
    originalDims: {
      width: "600px",
      height: "400px"
    },
    attributesValidationRules: {
      name: {
        type: "string",
        optional: false
      },
      startFrom: {
        type: "number",
        optional: true
      },
      duration: {
        type: "number",
        optional: true
      },
      fadeIn: {
        type: "boolean",
        optional: true
      },
      fadeOut: {
        type: "boolean",
        optional: true
      }
    }
  }]
};

module.exports = index;
