const electron = require("electron");
const database = require("./database/database");
const dialogueBox = require("./dialogueBox/dialogueBox");
const header = require("./header/header");
const settings = require("./settings/settings");
const { ipcMain } = electron;

const listeners = (io, mainWindow) => {
  database(io);
  dialogueBox(mainWindow);
  header(mainWindow);
  settings(mainWindow);
  ipcMain.on("ping", (e, data) => console.log(data));
};

module.exports.listeners = listeners;
