import { AudioClip, AudioEffect, AudioPlayback } from "@donkeyclip/motorcortex";

export default class MyHTMLClip extends AudioClip {
  get audioSources() {
    return [
      {
        src: `https://sounds.ams3.cdn.digitaloceanspaces.com/sounds_storage/public/${this.attrs.name}.mp3`,
        id: "track-id",
        base64: false,
      },
    ];
  }

  buildTree() {
    const duration = this.attrs.duration || +this.attrs.name.split("_")[1];
    const songPlayback = new AudioPlayback({
      selector: "~#track-id",
      startFrom: !this.attrs.startFrom ? 0 : this.attrs.startFrom,
      duration: duration,
    });
    if (this.attrs.fadeIn === true) {
      const fadeIn = new AudioEffect(
        {
          animatedAttrs: {
            gain: 1,
          },
          initialValues: {
            gain: 0,
          },
        },
        {
          selector: "~#track-id",
          duration: Math.floor(duration * 0.25),
        }
      );
      this.addIncident(fadeIn, 0);
    }

    if (this.attrs.fadeOut === true) {
      const fadeOut = new AudioEffect(
        {
          animatedAttrs: {
            gain: 0,
          },
          initialValues: {
            gain: 1,
          },
        },
        {
          selector: "~#track-id",
          duration: Math.floor(duration * 0.25),
        }
      );
      this.addIncident(fadeOut, Math.floor(duration * 0.75));
    }

    this.addIncident(songPlayback, 0);
  }
}
