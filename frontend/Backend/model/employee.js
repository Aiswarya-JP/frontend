const mongoose = require('mongoose');
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Salary:Number

})
var Employemodel = mongoose.model('employee', schema);
module.exports = Employemodel;