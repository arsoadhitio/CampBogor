const express = require('express');
const app = express();
const pool = require("./db");
let port = process.env.PORT || 5000;

app.use(express.json())


// ROUTES

// get all camp

app.get("/camp", async(req, res) => {
    try {
        const allCamp = await pool.query("SELECT * FROM camp");

        res.json(allCamp.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a camp

app.get("/camp/:id", async(req, res) => {
    const {id} = req.params
    try {
        const camp = await pool.query("SELECT * FROM camp WHERE camp_id = $1", [id]);

        res.json(camp.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// create a camp

app.post("/camp", async(req, res) => {
    try{
        // await
        const { name } = req.body;
        const newCamp = await pool.query(
            "INSERT INTO camp (name) values ($1, $2) RETURNING *",
            [name]
        );

        res.json(newCamp.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// update a camp

app.put("/camp/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {address} = req.body;

        const updateCamp = await pool.query("UPDATE camp SET address = $1 WHERE camp_id = $2", [address, id]);

        res.json("camp was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// delete a camp

app.delete("/camp/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCamp = await pool.query(
            "DELETE FROM camp WHERE camp_id = $1"
        );

        res.json("camp was successfully deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
})