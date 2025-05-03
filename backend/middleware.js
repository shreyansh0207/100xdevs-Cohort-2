const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/middleware", (req, res, next) => {
    console.log("Middleware is running");
    next();
});

let users = [ 
    { name: "John", age: 22 },
    { name: "Sam", age: 30 }
];

// ✅ Correct route with a single res.send
app.get("/middleware/get", (req, res) => {
    res.send(users); // Sends all user data
});

// ✅ Correct POST route
app.post("/middleware/post", (req, res) => {
    const addUser = {
        name: req.body.name,
        age: req.body.age,
        id: users.length + 1
    };

    users.push(addUser);

    res.status(201).json({
        message: "User added successfully",
        addUser
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
