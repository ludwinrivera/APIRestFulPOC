var sql = require('mssql');

var dbconfig = {
    server: "LRIVERAP-DV01",
    database: "TestDB",
    user: "sa",
    password: "Control123",
    port: 1433
}



module.exports = {
    executeQuery: function (stringQuery) {
        //var conn = new sql.Connection(dbconfig);
        //conn.connect().then(function () {
        //    var req = new sql.Request(conn);
        //    req.query(stringQuery).then(function (recordset) {
        //    conn.close();
        //    return recordset;
        //    })
        //    .catch(function (err) {
        //        console.log(err);
        //        conn.close();
        //        return err;
        //    });
        //})
        //.catch(function (err) {
        //    console.log(err);
        //    conn.close();
        //    return err;
        //});        
        var conn = new sql.Connection(dbconfig, function (err) {
            if (err) {
                console.log(err);
                conn.close();
                return err;
            }
            else {
                var req = new sql.Request(conn);
                req.query("Select * From Prod", function (err, recordset) {
                    if (err) {
                        console.log(err);
                        conn.close();
                        return err;
                    }
                    else {
                        console.log(recordset);
                        conn.close();
                        return recordset;
                    }
                });
            }
        });
    }
};