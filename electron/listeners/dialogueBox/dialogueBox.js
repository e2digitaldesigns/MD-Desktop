const electron = require("electron");
const { ipcMain } = electron;
const fs = require("fs");
const path = require("path");

const dialogueBox = mainWindow => {
  ipcMain.on("soundBoardProfile:dialogueBox", (event, data) => {
    electron.dialog
      .showOpenDialog("", {
        properties: ["openDirectory"]
      })
      .then(result => {
        console.log(15, result.canceled);
        console.log(16, result.filePaths);

        /////////////////////////////////////////
        /////////////////////////////////////////
        /////////////////////////////////////////
        if (result.filePaths[0]) {
          const filesToSend = [];
          const fileNames = [];
          const thePath = result.filePaths[0];
          const profileName =
            thePath.split(`\\`)[thePath.split(`\\`).length - 1];

          fs.readdir(thePath, (err, files) => {
            if (err) {
              return console.log("Unable to scan directory: " + err);
            }

            files.forEach((file, index) => {
              if (file.endsWith(".mp3")) {
                filesToSend.push(file);
                fileNames.push(path.basename(file, ".mp3"));
                console.log(index, file);
                console.log(path.basename(file, ".mp3"));
              }
            });

            event.reply("soundBoardProfile:dialogueBoxReturn", {
              thePath,
              profileName,
              filesToSend,
              fileNames
            });
          });
        }
        /////////////////////////////////////////
        /////////////////////////////////////////
        /////////////////////////////////////////
      })
      .catch(err => {
        console.log(err);
      });
  });
};

module.exports = dialogueBox;
