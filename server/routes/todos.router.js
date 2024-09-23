const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newToDo = req.body;

    const queryText = `INSERT INTO "todos" ("task", "isComplete") VALUES ($1, $2)`;
pool.query(queryText, [newToDo.task, newToDo.isComplete])
.then(result => {
    res.sendStatus(210);
})
.catch(err => {
    console.log('Error completing POST task query', err);
    res.sendStatus(500);
    });
});



module.exports = router;
