import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/motorcortex-sounddrag.esm";
const MyPlugin = loadPlugin(MyPluginDefinition);

const clip = new HTMLClip({
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
    name: "Electronic-Violin_16057",
    startFrom: 0,
    duration: 6000,
    fadeIn: true,
    fadeOut: true,
  },
  {
    repeats: 3,
    hiatus: 1000,
    delay: 1000,
    id: "myClip",
  }
);

clip.addIncident(newHTMLClip, 0);

new Player({ clip });
