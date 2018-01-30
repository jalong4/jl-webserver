const fs = require('fs')
const path = require('path')
const readline = require('readline')
const google = require('googleapis')
const googleAuth = require('google-auth-library')
const config = require('../config/config')

function authorize (credentials, callback) {
    console.log('googleApis.authorize')
    console.log(credentials)
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile (config.googleapis.TOKEN_PATH, function(err, token) {
        if (err) {
        getNewToken(oauth2Client, callback);
        } else {
        oauth2Client.credentials = JSON.parse(token);
        callback(oauth2Client);
        }
    });
}

function getNewToken (oauth2Client, callback) {

    var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: config.googleapis.SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    callback(null, authUrl)

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the code from that page here: ', function(code) {
        rl.close();
        oauth2Client.getToken(code, function(err, token) {
        if (err) {
            console.log('Error while trying to retrieve access token', err);
            return;
        }
        oauth2Client.credentials = token;
        storeToken(token);
        callback(oauth2Client);
        });
    });
}

function storeToken(token) {
    try {
        fs.mkdirSync(config.googleapis.TOKEN_DIR);
    } catch (err) {
        if (err.code != 'EEXIST') {
        throw err;
        }
    }
    fs.writeFile(config.googleapis.TOKEN_PATH, JSON.stringify(token));
    console.log('Token stored to ' + config.googleapis.TOKEN_PATH);
}


function listFiles(auth) {
    console.log('googleApis.listFiles')
    var service = google.drive('v3');
    service.files.list({
        auth: auth,
        pageSize: 10,
        fields: "nextPageToken, files(id, name)"
    }, function(err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var files = response.files;
        if (files.length == 0) {
        console.log('No files found.');
        } else {
            console.log('Files:');
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                console.log('%s (%s)', file.name, file.id);
            }
        }
    });
}

module.exports = {
    // Load client secrets from a local file.

    get (req, res) {
        console.log('googleApis.get')
        fs.readFile(path.join(__dirname, '../config/client_secret.json'), (err, content) => {
            if (err) {
                console.log('Error loading client secret file: ' + err);
                return res.send({error: err.message})
              }
            // Authorize a client with the loaded credentials, then call the
            // Drive API.
            authorize(JSON.parse(content), listFiles);
        })
    },
    oauth2callback(req, res) {
        console.log(`req = ${req}, res=${res}`)
        return res.send(res.body)
    }
}
