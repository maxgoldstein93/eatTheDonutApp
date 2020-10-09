var orm = require("../config/orm.js");




var donut ={

    selectAll: function(cb){
        orm.selectAll("donuts", function(result){
            cb(result);
        });
    },
    insertOne: function( newdonut, cb){
        orm.insertOne("donuts", "donut_name", newdonut, function(result){
            cb(result);
        });
    }




}





// orm.updateOne()



module.exports = donut;