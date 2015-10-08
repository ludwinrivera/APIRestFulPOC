
/*
 * Search API.
 */
var searchHandler = require('../handlers/searchHandler.js');



//Functions
module.exports = function (app) {

    getKeyWordList = function (req, res) {
        var result = searchHandler.getKeyWordList(req.params.key);
        //parse result to xml
        res.send("Key: " + req.params.key + "<br>" + result);
    }
    //getAll
    
    
    //Routes
    app.get('/searchapi/:key', getKeyWordList);
    //app.get('/searchapi/', getKeyWordList);
};