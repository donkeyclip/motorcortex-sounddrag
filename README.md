# motorcortex-sounddrag

## Purpose

The motorcortex-sounddrag is a plugin that allows the user to easily add music or sound-effects to your clips

## How to use

Go to donkeyclip.sounddrag.com find the sound you like to use from a big list of license-free sounds and copy the name of the sound. Then create a new track incident and use the copied name as the value for the attribute key name and you have done.

# Create incident

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

## More

If fade in and out effects are not enough for you, you can create your effects using MotorCortex [AudioEffect](https://docs.motorcortexjs.com/sound/audio-incidents#audioeffect) to apply your custom effect you need an id to select the Audio source this id is "track-id"
and then add the incident to the track incident.

### Example

```javascript
const MyEffect = new MotorCortex.AudioEffect(
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

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
