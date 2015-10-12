
/*
 * Search Controller.
 */
var dbManager = require('../dataAccess/dataAccessManager.js');

module.exports = {
    getKeyWordList: function (key) {
        var query = "Select * From Prod";
        //        var query = "Select * From Prod Where SKU = '" + key + "'";
        dbManager.setDataManager("memory");
        var result = dbManager.executeQuery(query);
        
        return result;
    }
};