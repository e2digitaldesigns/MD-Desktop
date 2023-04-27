import { IntButtonData } from "./types";

export const profileStream: IntButtonData[] = [
  {
    action: "obs",
    subAction: "obsStreamToggle",
    text: "Go Live",
    textColor: "#eeeeee",
    icon: "Twitch",
    bgColor: "#9147ff"
  },
  {
    action: "obs",
    subAction: "obsRecordToggle",
    text: "Record",
    textColor: "#eeeeee",
    icon: "PlayCircle",
    bgColor: "#ff0000"
  },
  {
    action: "obs",
    subAction: "obsSceneChange",
    text: "Starting",
    textColor: "#eeeeee",
    icon: "Image",
    iconColor: "#aaaaaa",
    bgColor: "#222222"
  },
  {
    action: "obs",
    subAction: "obsSceneChange",
    text: "Be Right Back",
    textColor: "#eeeeee",
    icon: "Image",
    iconColor: "#aaaaaa",
    bgColor: "#222222"
  },
  {
    action: "obs",
    subAction: "obsSceneChange",
    text: "Ending",
    textColor: "#eeeeee",
    icon: "Image",
    iconColor: "#aaaaaa",
    bgColor: "#222222"
  }
];
