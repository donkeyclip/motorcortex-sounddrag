!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-sounddrag"]=e(t.MotorCortex)}(this,(function(t){"use strict";class e extends t.AudioClip{get audioSources(){return[{src:"https://sounds.ams3.cdn.digitaloceanspaces.com/sounds_storage/public/".concat(this.attrs.name,".mp3"),id:"track-id",base64:!1}]}buildTree(){const e=this.attrs.duration||+this.attrs.name.split("_")[1],o=new t.AudioPlayback({selector:"~#track-id",startFrom:this.attrs.startFrom?this.attrs.startFrom:0,duration:e});if(!0===this.attrs.fadeIn){const o=new t.AudioEffect({animatedAttrs:{gain:1},initialValues:{gain:0}},{selector:"~#track-id",duration:Math.floor(.25*e)});this.addIncident(o,0)}if(!0===this.attrs.fadeOut){const o=new t.AudioEffect({animatedAttrs:{gain:0},initialValues:{gain:1}},{selector:"~#track-id",duration:Math.floor(.25*e)});this.addIncident(o,Math.floor(.75*e))}this.addIncident(o,0)}}return{npm_name:"@donkeyclip/motorcortex-sounddrag",version:"1.1.0",incidents:[{exportable:e,name:"Track",originalDims:{width:"600px",height:"400px"},attributesValidationRules:{name:{type:"string",optional:!1},startFrom:{type:"number",optional:!0},duration:{type:"number",optional:!0},fadeIn:{type:"boolean",optional:!0},fadeOut:{type:"boolean",optional:!0}}}]}}));