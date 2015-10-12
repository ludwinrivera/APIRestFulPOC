var sqlManager = require('./sqlDBManager.js');
var memoryManager = require('./memoryManager.js');


var typeManager = "";

module.exports = {
    setDataManager: function (dataManagerType) {
        typeManager = dataManagerType;
    },

    executeQuery: function (query) {
        if (typeManager == "memory") {
            return memoryManager.executeQuery(query);
        }
        else if (typeManager == "mssql") {
            return sqlManager.executeQuery(query);
        }
    }
};