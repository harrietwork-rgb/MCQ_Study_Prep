const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1000, height: 820, autoHideMenuBar: true, title: 'Multiple Choice Study Prep' });
  win.loadFile('index.html');
});
app.on('window-all-closed', () => app.quit());
