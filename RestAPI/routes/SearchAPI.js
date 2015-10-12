
/*
 * Search API.
 */
var searchHandler = require('../handlers/searchHandler.js');
var xml = require('xml');


//Functions
module.exports = function (app) {

    getKeyWordListJson = function (req, res) {
        var result = searchHandler.getKeyWordList(req.params.key);
        res.setHeader('Content-Type', 'applications-json');
        res.send(JSON.stringify(eval("(" + result + ")")));
    }

    getKeyWordListXml = function (req, res) {
        var result = searchHandler.getKeyWordList(req.params.key);
        res.setHeader('Content-Type', 'text-xml');
        res.send(JSON.stringify(xml(result)));
    }
    
    
    //Routes
    app.get('/searchapi/json/:key', getKeyWordListJson);
    app.get('/searchapi/xml/:key', getKeyWordListXml);
    //app.get('/searchapi/', getKeyWordList);
};