var sqlManager = require('./SqlDBManager.js');
var memoryManager = require('./MemoryManager.js');


var typeManager = "";

module.exports = {
    setDataManager: function (dataManagerType) {
        typeManager = dataManagerType;
    },

    executeQuery: function (query) {
        if (typeManager == "mssql") {
            return sqlManager.executeQuery(query);
        }
        else if (typeManager == "memory") {
            return memoryManager.executeQuery(query);
        }
    }
};