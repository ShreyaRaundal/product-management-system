const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", (req, res) => {

    const search = req.query.search || "";
    const category = req.query.category || "";

    const page = parseInt(req.query.page) || 1;
    const limit = 5;

    const offset = (page - 1) * limit;

    let query = "SELECT * FROM products WHERE 1=1";

    if (search) {
        query += ` AND name LIKE '%${search}%'`;
    }

    if (category) {
        query += ` AND category='${category}'`;
    }

    query += ` LIMIT ${limit} OFFSET ${offset}`;

    db.query(query, (err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }

    });

});


router.post("/", (req, res) => {

    const { name, price, category } = req.body;

    const query =
        "INSERT INTO products (name, price, category) VALUES (?,?,?)";

    db.query(query, [name, price, category], (err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: "Product added successfully" });
        }

    });

});


router.delete("/:id", (req, res) => {

    const id = req.params.id;

    const query = "DELETE FROM products WHERE id=?";

    db.query(query, [id], (err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: "Product deleted successfully" });
        }

    });

});


module.exports = router;