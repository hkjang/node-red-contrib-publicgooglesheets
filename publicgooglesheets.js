var PublicGoogleSheetsParser = require('public-google-sheets-parser');

module.exports = function(RED) {
    "use strict";
    function publicgooglesheetsOut(n) {
        RED.nodes.createNode(this,n);
        var self = this;
        this.spreadsheetId = n.spreadsheetId || "";
        this.on('input', function (msg) {
            var spreadsheetId = self.spreadsheetId || msg.spreadsheetId;
            try {

                // const spreadsheetId = '10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps';
                const parser = new PublicGoogleSheetsParser (spreadsheetId);
                parser.parse().then((items) => {
                    msg.payload = items;
                    self.send(msg);
                    self.log(msg.payload);
                });
            }catch (err) {
                msg.payload = err;
                self.send(msg);
                self.log(err,msg);
                console.trace();
            }
        });
    }
    RED.nodes.registerType("publicgooglesheets", publicgooglesheetsOut);
};
