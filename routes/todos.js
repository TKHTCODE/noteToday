let express = require('express');
let router = express.Router();

router.get('/todos', function(req, res, next){
    res.send('TODOS API');
});

module.exports = router;