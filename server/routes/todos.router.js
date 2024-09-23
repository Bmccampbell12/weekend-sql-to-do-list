const router = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


router.get('/', (req, res) => {
    // const newToDo = req.body;

   

    const queryText = `SELECT * FROM "tasks" ORDER BY "isComplete";`;

 pool.query(queryText) //[newToDo.task, newToDo.isComplete])
.then(result => {
    res.send(result.rows);
})
.catch(err => {
    console.log(err);
    res.sendStatus(500);
    });
});
router.put('/:id, (req, res) => {
    console.log("req.params", req.params)
};




module.exports = router;
