const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const queryParams = [req.params.id]
    const queryText =
        `UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE "id"=$1;`;
    pool.query(queryText, queryParams)
        .then(result => {
            console.log("PUT went through in DB");
            res.send(result.rows)
        })
        .catch(error => {
            console.log("error with PUT:", error)
            res.sendStatus(500);
        })
}); // END PUT Route



// GET Route
router.get('/', (req, res) => {
    const queryText =
        `SELECT * FROM "gallery"
        ORDER BY "id" ASC;`;
    pool.query(queryText)
        .then(result => {
            console.log("got stuff back from DB")
            res.send(result.rows);
        })
        .catch(error => {
            console.log("error getting stuff", error)
            res.sendStatus(500)
        })
}); // END GET Route

module.exports = router;