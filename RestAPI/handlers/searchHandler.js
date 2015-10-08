
/*
 * Search Controller.
 */
var dbManager = require('../data_access/DataAccessManager.js');

module.exports = {
    getKeyWordList: function (key) {
        var query = "Select * From Prod";
        //        var query = "Select * From Prod Where SKU = '" + key + "'";
        dbManager.setDataManager("memory");
        var result = dbManager.executeQuery(query);
        
        return result;
    }
   
};