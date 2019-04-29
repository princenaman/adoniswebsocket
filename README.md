# adoniswebsocket
Web-Socket Test

Install adonis 3.2

package.json:
```
  "dependencies": {
    "@sentry/node": "^5.1.0",
    "adonis-ace": "^3.0.7",
    "adonis-auth": "^1.0.5",
    "adonis-commands": "^2.1.5",
    "adonis-fold": "^3.0.3",
    "adonis-framework": "^3.0.10",
    "adonis-lucid": "^3.0.14",
    "adonis-middleware": "^1.0.11",
    "adonis-validation-provider": "^3.0.5",
    "adonis-websocket": "^1.0.3",
    "aws-sdk": "^2.382.0",
    "dotenv": "^7.0.0",
    "ffmpeg": "0.0.4",
    "gulp-s3-upload": "^1.7.3",
    "json2csv": "^4.3.5",
    "mysql": "^2.16.0",
    "nodemailer": "^5.1.1",
    "php-serialize": "^2.1.0",
    "pushy": "^2.0.5",
    "request-promise": "^4.2.4",
    "shelljs": "^0.8.3",
    "twitter": "^1.7.1",
    "unescape": "^1.0.1",
    "youch": "^2.0.4"
  },
```

Create channel:
```
  Ws.channel('chat', 'ChatController')
 ```
 
 
 Chat Controller
 ```
  'use strict'

  class ChatController {

    constructor (socket, request) {
      socket.socket._maxListeners = 300
      this.socket = socket
      this.request = request
      console.log('socket connected: ' + socket.id + ' at ' + new Date()) // eslint-disable-line
    }

    * onMessage (payload, callback) {
      callback({ payload, error: false })
    }

  }
 ```
 
 Use the test directory to load test the socket.
