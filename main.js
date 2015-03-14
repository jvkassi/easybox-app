var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.

var ipc = require('ipc'),
    dialog = require('dialog'),
    Tray = require('tray'),
    ssh = require('ssh2'),
    Menu = require('menu'),
    Client = require('ssh2').Client;

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {


    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true
    });

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/build/app/index.html');

    mainWindow.openDevTools();
    // Emitted just before windows is closed
    mainWindow.on('before-quit', function(event) {
        // event.preventDefault();
    });

    // Close event
    mainWindow.on('close', function(event) {
        // Prevent default event
        event.preventDefault();
        // Hide windows
        mainWindow.hide();
    })

    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    var appIcon = new Tray(__dirname + '/build/app/images/tray.png');
    var contextMenu = Menu.buildFromTemplate([{
        label: 'Ouvrir',
        type: 'normal',
        click: function() {
            mainWindow.show();
            console.log("Open");
        }
    }, {
        label: 'Quitter',
        type: 'normal',
        click: function() {
            mainWindow.destroy()
            console.log("Destroy window");
        }
    }]);
    appIcon.setToolTip('MEBOX');
    appIcon.setContextMenu(contextMenu);

    appIcon.on('double-clicked', function(event) {})

    appIcon.on('clicked', function(event) {
        mainWindow.show();
        console.log("okkkk!!");
    })

    // dialog.showMessageBox(mainWindow, {
    //     type: "info",
    //     buttons: ["adf", "adsf"],
    //     title: "dsf",
    //     message: "adsf",
    //     detail: "asdf"
    //         // icon NativeImage

    // }, function(response) {
    //   console.dir(response);
    // })

    // Choose directory

});

/*
    Select open dialog
*/

ipc.on('dialog', function(event, options) {
    
    // Home dir
    
    var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;

    var paths = dialog.showOpenDialog({
        defaultPath: homedir, // open dialog at home dir
        properties: [
            'openDirectory', // can only choose folders
            'multiSelections' // can select multiple folders
        ]
    });

    console.log(paths);
    // Return path
    event.returnValue = paths;
})


/*
 Login IPC Call 

 */
ipc.on('try-login', function(event, options) {

    var conn = new Client(),
        IP = '10.100.30.168',
        PORT = '22'

    var user = {
        host: IP,
        port: PORT,
        username: options.identifier,
        password: options.password
    };

    conn.on('ready', function() {
        // end con
        // conn.end();
        // event.sender.send("sucess-login", "pong");
        event.returnValue = "success-login";
    })

    conn.on('error', function(err) {
        // end con
        // conn.end();

        // event.sender.send("fail-login", err);
        event.returnValue = "fail-login";

    })

    // var ssh = require('promised-ssh');

    // ssh
    //   .connect(user)
    //   .then(function(connection) {
    //           return connection.exec(['ls -al']);
    //       })
    //       .spread(function(stdout, stderr) {
    //           console.log('Returned with return code ' + return_code);
    //           if (stdout) console.log('STDOUT: ' + stdout);
    //           if (stderr) console.log('STDERR: ' + stderr);
    //       })
    //       .catch(function(error) {
    //           // error is here an instance of ssh.errors.CommandExecutionError
    //           // it contains information about exit code, stdout and stderr
    //           throw error;
    //       });
    conn.connect(user);


});

/*

Watch file 

*/

ipc.on('asynchronous-message', function(event, arg) {

    console.log("RECEIVED");
    var files, file;
    files = dialog.showOpenDialog({
        title: 'Select MP3 File',
        filters: [{
            name: "MP3 Files",
            extensions: ['mp3']
        }],
        properties: ['openFile']
    })


});
