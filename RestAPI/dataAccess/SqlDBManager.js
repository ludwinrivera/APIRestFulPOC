var sql = require('mssql');

var dbconfig = {
    server: "WIN-VP3E8ADOGVV",
    database: "Test01",
    user: "sa",
    password: "Control123",
    port: 1433
};

//var dbconfig = {
//    server: "serverpa01.database.windows.net",
//    database: "DBPA0002",
//    user: "dbadmin",
//    password: "Control123",
//    port: 1433,
//    options: {
//        encrypt: true // Use this if you're on Windows Azure 
//    }
//};



module.exports = {
    executeQuery: function (stringQuery) {
        execute(stringQuery, function (err, result) {
            if (typeof err !== "undefined" && err !== null) {
                console.log(err);
                return;
            }
            if (typeof err == "undefined" && typeof result !== "undefined") {
                return result;    
            }
            
            
        });
    }
};

function execute(stringQuery, callback) {
    try {
        
        //conn.connect().then(function (callback) {
        //    var req = new sql.Request(conn);
        //    req.query(stringQuery).then(function (recordset) {
        //        console.log(recordset);
        //        conn.close();
        //        callback(recordset);
        //    })
        //        .catch(function (err) {
        //        console.log(err);
        //        conn.close();
        //        response = err;
        //    });
        //        //return "[{'firstName': 'John' , 'lastName': 'Doe'},{'firstName': 'Anna','lastName': 'Smith'},{'firstName': 'Peter','lastName': 'Jones'}]";
        //})
        //.catch(function (err) {
        //    console.log(err);
        //    conn.close();
        //    response = err;
        //});
        var error;
        var result;
        var conn = new sql.Connection(dbconfig, function (err, recordset) {
            if (typeof err !== "undefined" && err !== null) {
                conn.close();
                callback(err);
                return
            }
            var req = new sql.Request(conn);
            req.query(stringQuery, function (err, recordset) {
                conn.close();
                error = err;
                result = recordset;
            });
        });
        return callback(error, result);
        
    } catch (err) {
        console.log(err);
        response = err;
    }
    
}