export enum ApplicationActions {
  API = "api",
  DELAY = "delay",
  EXE = "exe",
  KEYTAP = "keyTap",
  MD = "md",
  OBS = "obs",
  SOUND = "sound",
  SPO = "spotify",
  TW = "twitter",
  MC = "mc"
}

export enum ApplicationSubAction {
  obsLayerHide,
  obsLayerShow,
  obsLayerToggle,
  obsRecordStart,
  obsRecordStop,
  obsRecordToggle,
  obsRecordPause,
  obsRecordResume,
  obsSceneChange,
  obsStreamStart,
  obsStreamStop,
  obsStreamToggle,
  spotifyNext,
  spotifyPause,
  spotifyPrevious,
  spotifyStart,
  spotifyStop,

  mcAudioNext,
  mcAudioPause,
  mcAudioStop,
  mcAudioPlay,
  mcAudioPrev,
  mcAudioMute,
  mcAudioVolDown,
  mcAudioVolUp
}

export interface IntActionTypes {
  name: string;
  display: string;
  active: boolean;
  subActions?: string[];
}

export enum FormFieldFileTypes {
  MDFileFieldExe = "mdFileFieldExe",
  MDFileFieldSound = "mdFileFieldSound",
  FileField = "fileField"
}
