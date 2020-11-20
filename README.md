node-red-contrib-publicgooglesheets
========================

<a href="http://nodered.org" target="_new">Node-RED</a> 

<a href="https://www.npmjs.com/package/public-google-sheets" target="_new">public-google-sheets-parser wrapper</a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-publicgooglesheets


Usage
-----

## publicgooglesheets  
<i><a href="https://www.npmjs.com/package/public-google-sheets" target="_new">publicgooglesheets</a></i> api request node.

It is a simple parser that helps you use public Google sheets document as if they were a database.

The document to be used must be a Google Sheets document in the 'public' state and have a header in the first row. (e.g. [Google sheets for example](https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps/edit#gid=1839148703))

There is a limitation that only the data of the first sheet can be imported, but it seems that it can be fully utilized for simple purposes, so I made it.

It does not work in browsers where the [fetch API](https://caniuse.com/fetch) is not available.

**No API key required.** This means that the server does not need to use the private key to use the SDK.

If you have a public spreadsheet document, and the first row is a header and you have more than one row of data, you can call it free of charge through this API and use the result as a JSON response.

### spreadsheetId 
- need only public spreadsheet ID 

## sample flow

```json
[{"id":"5287f509.66249c","type":"inject","z":"27616db5.40b352","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":360,"y":40,"wires":[["e36bf6e2.633f58"]]},{"id":"e36bf6e2.633f58","type":"publicgooglesheets","z":"27616db5.40b352","spreadsheetId":"","x":610,"y":40,"wires":[["a499660e.12d2e8","3a9e7400.38055c"]]},{"id":"a499660e.12d2e8","type":"debug","z":"27616db5.40b352","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":830,"y":40,"wires":[]},{"id":"82807216.1063c","type":"http in","z":"27616db5.40b352","name":"","url":"/googlesheets","method":"get","upload":false,"swaggerDoc":"","x":150,"y":100,"wires":[["e7300abe.757e98"]]},{"id":"3a9e7400.38055c","type":"http response","z":"27616db5.40b352","name":"","statusCode":"","headers":{},"x":810,"y":100,"wires":[]},{"id":"e7300abe.757e98","type":"function","z":"27616db5.40b352","name":"set spreadsheetId param","func":"// sample public google sheets id\n// 10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps\n\nmsg.spreadsheetId = msg.payload.id;\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":390,"y":100,"wires":[["e36bf6e2.633f58"]]}]
```

## result 
```json
[
    {
        "a": 1,
        "b": 2,
        "c": 3
    },
    {
        "a": 4,
        "b": 5,
        "c": 6
    },
    {
        "a": 7,
        "b": 8,
        "c": 9
    }
]
```
