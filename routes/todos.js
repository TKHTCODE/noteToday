let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
let uri = 'mongodb+srv://'+process.env.username+':'+process.env.password +'@cluster0.glfar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

router.get('/todos', function(req, res){
    MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client){
        var collection = client.db('todos').collection('todos');
        collection.find().toArray(function(error, documents){
            if(err){
                res.send(err);
            }else{
                res.send(documents);
            }
        })
    });
});

module.exports = router;