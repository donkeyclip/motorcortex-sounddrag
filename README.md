# MotorCortex-SoundDrag

**Table of Contents**

- [MotorCortex-SoundDrag](#motorcortex-sounddrag)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Track](#track)
  - [Extra Effects](#extra-effects-with-audioeffect)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here]

# Intro / Features

The MotorCortex-SoundDrag is a plugin that allows you to add music or sound effects easily to your clips.
Go to [sounds.donkeyclip.com](https://sounds.donkeyclip.com/) find the sound you like to use from a big list of license-free sounds and copy the name of the sound. Then create a new track incident and use the copied name as the value for the attribute key name and you have done.


# Getting Started
## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-sounddrag
# OR
$ yarn add @donkeyclip/motorcortex-sounddrag
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex/";
import SoundDragPlugin from "@donkeyclip/motorcortex-sounddrag";
const SoundDrag = loadPlugin(SoundDragPlugin);
```

# Creating Incidents
## Track

```javascript
const newHTMLClip = new SoundDrag.Track(
  {
    name: "Electronic-Violin_16057",
    startFrom: 0,
    duration: 2000,
    fadeIn: false,
    fadeOut: false,
  },
  {
    repeats: 3,
    hiatus: 1000,
    delay: 1000,
    id: "myClip",
  }
);
```

### Track Attrs

| Name      |                       Are                       |  Values |
| --------- | :---------------------------------------------: | ------: |
| name      | name of the sound from donkeyclip.sounddrag.com |   sting |
| startFrom |      millisecond which sound start playing      |     num |
| duration  |        for how long the sound will play         |     num |
| fadeIn    |       this will enable the fadein effect        | boolean |
| fadeOut   |       this will enable the fadeout effect       | boolean |

## Extra Effects with AudioEffect
If `fadeIn` and `fadeOut` effects are not enough for you, you can create your effects using MotorCortex [AudioEffect](https://docs.motorcortexjs.com/sound/audio-incidents#audioeffect) to apply your custom effect you need an id to select the Audio source this id is "track-id"
and then add the incident to the track incident.
#### Example

```javascript
const MyEffect = new AudioEffect(
  {
    animatedAttrs: {
      pan: 1,
      gain: 0,
    },
  },
  {
    selector: "~#track-id",
    duration: 3000,
  }
);

trackIncident.addIncident(MyEffect, 1000);
```

#### IMPORTANT
You should import AudioEffect from MotorCortex.
```javascript
import { AudioEffect } from "@donkeyclip/motorcortex";
```
# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
