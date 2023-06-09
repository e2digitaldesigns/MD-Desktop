export enum IpcRendererTypes {
  database = "database",
  databaseReturn = "database:return",
  databaseMobileUpdate = "database:mobileUpdate",
  header = "header",
  importSettings = "importSettings",
  importSettingsReturn = "importSettings:return",
  mdPlaySound = "MacroDeck:playSound",
  Ping = "ping",
  soundBoardProfile = "soundBoardProfile:dialogueBox",
  soundBoardProfileReturn = "soundBoardProfile:dialogueBoxReturn"
}

export enum IpcRendererTypesAction {
  close = "close",
  fsToggle = "fsToggle",
  minimize = "minimize",
  loadAppData = "loadAppData",
  saveAppData = "saveAppData",
  updateMobileDevice = "updateMobileDevice"
}
