const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 950,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      allowRunningInsecureContent: true,
      webviewTag: true,
      webSecurity: false
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  ipc.on('closeApp', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  ipc.on('maxRestore', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.webContents.send('isRestored');
      mainWindow.restore();
    } else {
      mainWindow.webContents.send('isMaximized');
      mainWindow.maximize();
    }
  });

  ipc.on('minimize', () => {
    mainWindow.minimize();
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});