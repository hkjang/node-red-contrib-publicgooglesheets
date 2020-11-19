node-red-contrib-publicgooglesheets
========================

<a href="http://nodered.org" target="_new">Node-RED</a> 

<a href="https://publicgooglesheets.io/help/user-guide/integrations-and-api/api" target="_new">public-google-sheets-parser wrapper</a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-publicgooglesheets


Usage
-----

## publicgooglesheets  
<i><a href="https://publicgooglesheets.io/help/user-guide/integrations-and-api/api" target="_new">publicgooglesheets</a></i> api request node.

It is a simple parser that helps you use public Google sheets document as if they were a database.

The document to be used must be a Google Sheets document in the 'public' state and have a header in the first row. (e.g. [Google sheets for example](https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps/edit#gid=1839148703))

There is a limitation that only the data of the first sheet can be imported, but it seems that it can be fully utilized for simple purposes, so I made it.

It does not work in browsers where the [fetch API](https://caniuse.com/fetch) is not available.

**No API key required.** This means that the server does not need to use the private key to use the SDK.

If you have a public spreadsheet document, and the first row is a header and you have more than one row of data, you can call it free of charge through this API and use the result as a JSON response.

### spreadsheetId 
- need only public spreadsheet ID 

## parameter example
```javascript

```

## sample flow

```json


```
