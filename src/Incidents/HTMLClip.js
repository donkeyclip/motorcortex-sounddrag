/* eslint-disable no-console */
import { AudioClip, AudioPlayback, AudioEffect } from "@kissmybutton/motorcortex";

export default class MyHTMLClip extends AudioClip {
  
  get audioSources() {
    return [
      {
        src:
          `https://sounds.ams3.digitaloceanspaces.com/sounds_storage/public/Guitar2_6100.mp3`,
        id: "an-id-must-be-unique",
        base64: false,
      },
    ];
  }

  buildTree() {
    const duration = this.attrs.duration  || +this.attrs.name.split("_")[1] ;
    const songPlayback = new AudioPlayback({
      selector: "~#an-id-must-be-unique",
      startFrom: !this.attrs.startFrom ? 0 : this.attrs.startFrom ,
      duration: duration
    });
    if(this.attrs.fadeIn === true){
      const fadeIn = new AudioEffect({
        animatedAttrs: {
          gain: 1
        },
        initialValues:{
          gain: 0
        }
      }, {
        selector: "~#an-id-must-be-unique",
        duration: Math.floor(duration * 0.25)
      });
      this.addIncident(fadeIn, 0);
    }

    if(this.attrs.fadeOut === true){
      const fadeOut = new AudioEffect({
        animatedAttrs: {
          gain: 0
        },
        initialValues:{
          gain: 1
        }
      }, {
        selector: "~#an-id-must-be-unique",
        duration: Math.floor(duration * 0.25)
      });
      this.addIncident(fadeOut, duration -(duration * 0.25));
    }
    
    this.addIncident(songPlayback, 0);

  }
}
