const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

const phpServer = require('node-php-server');
const port = 8000;
const host = '127.0.0.1';
const serverUrl = `http://${host}:${port}`;

function createPhpServer()
{
  phpServer.createServer({
    port: port,
    hostname: host,
    base: `${__dirname}/www/public`,
    keepalive: false,
    open: false,
    bin: `${__dirname}/php/php.exe`,
    router: `${__dirname}/www/public/index.php`
  });
}

let mainWindow = null;

// You can modify the window setup to your needs
function createWindow()
{
  const newWindow = new BrowserWindow({
    autoHideMenuBar: true
  });

  newWindow.loadURL(serverUrl);

  if(mainWindow === null)
  {
    mainWindow = newWindow;
    newWindow.on('closed', () => mainWindow = null);
  }
}

// Events
app.on('ready', () => {
  createPhpServer();
  createWindow();
});

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform === 'darwin') return;

  phpServer.close();
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});