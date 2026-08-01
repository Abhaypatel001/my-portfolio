const db = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running 🚀");
});

const PORT = 5000;

app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    const sql =
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            message: "Message Saved Successfully"
        });

    });

});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});