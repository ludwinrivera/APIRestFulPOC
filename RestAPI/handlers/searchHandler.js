
/*
 * Search Controller.
 */
var dbManager = require('../dataAccess/dataAccessManager.js');

module.exports = {
    getKeyWordList: function (key) {
        var query = "Select * From Table01";
        //var query = "Select * From salesLT.Customer Where salesLT.Customer.CustomerID = " + key;
        //dbManager.setDataManager("memory");
        dbManager.setDataManager("mssql");
        var result = dbManager.executeQuery(query);
        console.log(result);
        return result;
    }
};