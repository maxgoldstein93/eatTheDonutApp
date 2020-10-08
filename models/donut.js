var orm = require("../config/orm.js");




var donut ={

    selectAll: function(cb){
        orm.selectAll("donuts", function(result){
            cb(result);
        });
    },



}




// orm.insertOne("donut", "donut_name")
// orm.updateOne()



module.exports = donut;