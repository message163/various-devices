//electron 主进程文件
const { app, BrowserWindow } = require('electron')
app.whenReady().then(() => {
    const win = new BrowserWindow({
        height:600,
        width:800,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
    win.webContents.openDevTools()
    win.loadURL('http://localhost:5173/')
});
