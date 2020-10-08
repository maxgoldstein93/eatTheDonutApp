
const connection = require("./connection.js");


var orm = {
    selectAll: function (whichTable, cb) {
        connection.query("Select * FROM ??;", [whichTable], function (err, result) {
            if (err) 
                throw err;
                console.log("COMING THDROUGHHHHH");

             return cb(result);
        });
    },
    insertOne: function (whichTable, whichColumn, donutName, cb) {
        connection.query("Insert Into ?? (??) VALUES ? ;", [whichTable, whichColumn, donutName], function (err, result) {
            if (err) {
                throw err;

            }
            cb(result)
        })
    },
    updateOne: function(whichTable, condition, cb){
        connection.query("UPDATE ?? SET devoured=1 WHERE ? ;",[whichTable, condition, cb], function(err,result){
            if (err){
                throw err;

            }

            cb(result)
        })
    }

}
module.exports = orm;

