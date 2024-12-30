const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aiswaryajayan58:aiswarya1912@cluster0.xl2iv.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })