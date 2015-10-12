var sql = require('mssql');

var dbconfig = {
    server: "serverpa01.database.windows.net",
    database: "DBPA0002",
    user: "dbadmin",
    password: "Control123",
    port: 1433
}



module.exports = {
    executeQuery: function (stringQuery) {
        var conn = new sql.Connection(dbconfig);        
        conn.connect().then(function () {
            var req = new sql.Request(conn);
            //req.query(stringQuery).then(function (recordset) {
            //conn.close();
            //return recordset;
            //})
            //.catch(function (err) {
            //    console.log(err);
            //    conn.close();
            //    return err;
            //});
            return "[{'firstName': 'John' , 'lastName': 'Doe'},{'firstName': 'Anna','lastName': 'Smith'},{'firstName': 'Peter','lastName': 'Jones'}]";
        })
        .catch(function (err) {
            console.log(err);
            conn.close();
            return err;
        });        
        
    }
};