
/*
 * Search Controller.
 */
var dbManager = require('../data_access/DBManager.js');

module.exports = {
    getKeyWordList: function (key) {
        var query = "Select * From Prod";
//        var query = "Select * From Prod Where SKU = '" + key + "'";
        var result = dbManager.executeQuery(query);
        
        return result;
    }
   
};