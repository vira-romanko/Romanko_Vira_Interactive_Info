const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');


router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT * FROM tbl_history";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('index', { data: result });
     
        

       
    })
})
//looling for localhost:3000/anything
router.get('/elements/:id', (req, res) => {
    console.log("hit a dynamic route");
    console.log(req.params.id);


    let query = `SELECT  ID, number, abbreviation, name, description FROM tbl_history WHERE ID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); 
        res.json(result);       
    })
})

module.exports = router;