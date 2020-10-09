
const connection = require("./connection.js");


var orm = {
    selectAll: function (whichTable, cb) {
        connection.query("Select * FROM ??;", [whichTable], function (err, result) {
            if (err) 
                throw err;
                console.log("COMING THROUGHHHHH");

             return cb(result);
        });
    },
    insertOne: function (whichTable, whichColumn, newdonut, cb) {
        connection.query("Insert Into ?? (??) VALUES (?);", [whichTable, whichColumn, newdonut], function (err, result) {
            if (err) 
                throw err;
                console.log("COMING THROUGHHHHH INSERT");
           return cb(result);
        })
    },
    updateOne: function(whichTable, condition, cb){
        connection.query("UPDATE ?? SET devoured=1 WHERE ? ;",[whichTable, condition], function(err,result){
            if (err)
                throw err;
                console.log("COMING THROUGHHHHH UPDATE");

            

            cb(result)
        })
    }

}
module.exports = orm;

