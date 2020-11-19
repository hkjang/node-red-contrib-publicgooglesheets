const publicgooglesheetsParser = require('public-google-sheets-parser')

module.exports = function(RED) {
    "use strict";

    // set this to true to spam your console with stuff.
    var publicgooglesheetsDebug = true;

    function publicgooglesheetsOut(n) {
        RED.nodes.createNode(this,n);
        var self = this;

        this.spreadsheetId = n.spreadsheetId || "";
        var node = this;

        this.on('input', function (msg) {
            var spreadsheetId = node.spreadsheetId || msg.spreadsheetId;

            if (publicgooglesheetsDebug) { node.log(JSON.stringify(msg.payload)); }
            try {

                // const spreadsheetId = '10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps';
                const parser = new publicgooglesheetsParser(spreadsheetId);
                parser.parse().then((items) => {
                    // items should be [{ a: 1, b: 2, c: 3}, { a: 4, b: 5, c: 6 }, ...]
                    msg.payload = items;
                    node.log(msg.payload);
                    self.send(msg);

                });
            }catch (err) {
                console.trace();
                msg.payload = err;
                self.send(msg);
                node.log(err,msg);
            }
        });
    }
    RED.nodes.registerType("publicgooglesheets", publicgooglesheetsOut);
};
