import { IntButtonData } from "./profileDefaults/types";

import { profileEmpty } from "./profileDefaults/empty";
import { profileMD } from "./profileDefaults/macroDeck";
import { profileStream } from "./profileDefaults/stream";
import { profileMediaControls } from "./profileDefaults/mediaControl";

export interface IntProfileDefaults {
  name: string;
  buttonPadCount: number;
  buttonPads: IntButtonData[];
}

export interface IntProfileDefaultsObject {
  profileEmpty: IntProfileDefaults;
  profileMD: IntProfileDefaults;
  profileStream: IntProfileDefaults;
  profileMediaControls: IntProfileDefaults;
}

export const profileDefaults: IntProfileDefaultsObject = {
  profileEmpty: {
    name: "New Profile",
    buttonPadCount: 15,
    buttonPads: profileEmpty
  },
  profileMD: { name: "MacroDeck", buttonPadCount: 15, buttonPads: profileMD },
  profileStream: {
    name: "Streaming",
    buttonPadCount: 15,
    buttonPads: profileStream
  },
  profileMediaControls: {
    name: "Media Controls",
    buttonPadCount: 15,
    buttonPads: profileMediaControls
  }
};
