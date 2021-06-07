import MotorCortex from "@kissmybutton/motorcortex";
import MyPluginDefinition from "../dist/bundle.umd";
const MyPlugin = MotorCortex.loadPlugin(MyPluginDefinition);

import Player from "@kissmybutton/motorcortex-player";

const clip = new MotorCortex.HTMLClip({
  html: `<div class="container">
        <div id="effect"></div>
        <div id="htmlclip"></div>
        <div id="combo"></div>
        <div id="myclip"></div>
    </div>`,
  css: `
        .container{
            width: 600px,
            height: 400px
        }
        .container>div{
            width: 50%;
            height: 50%;
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "600px",
    height: "400px",
  },
});

const newHTMLClip = new MyPlugin.Track(
  {
    name:"Electronic-Violin_16057",
    startFrom: 0,
    // duration: 2000,
    fadeIn: false,
    fadeOut: false
  },
  {
    repeats: 3,
    hiatus: 1000,
    delay: 1000,
    id: "myClip"
    
  }
);

const effect = new MotorCortex.AudioEffect({
  animatedAttrs: {
      pan: 1,
      gain: 0
  }
  }, {
  selector: "~#an-id-must-be-unique",
  duration: 3000
});


// newHTMLClip.addIncident(effect,15000)
clip.addIncident(newHTMLClip, 0);


const player = new Player({ clip });
