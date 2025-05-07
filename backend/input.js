const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let currentUser = null; // Define currentUser in a broader scope

app.post("/input", (req, res) => {
    const { name, email } = req.body;
    console.log(name, email);

    currentUser = { email, name };
    res.status(200).json({
        message: "Information received",
        currentUser
    });
});

app.get("/input/show", (req, res) => {
    if (currentUser) {
        res.json({ message: 'User data:', currentUser });
    } else {
        res.status(404).json({ message: 'No user data found' });
    }
});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
