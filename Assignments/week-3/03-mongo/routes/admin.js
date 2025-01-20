const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
//Signup means to make the account
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //NOW ADD THE DETAILS TO THE BACKEND
    await Admin.create({
        username,
        password
    })
    res.json({
        message: 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    //headers username password

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses',  adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const respone = await Course.find({})
    res.json({
        respone
    })
});

module.exports = router;

// {
//     "title" : "MERN",
//     "description"  : "This is the course from 100xdevs",
//     " imageLink ":  "ABCD",
//     " price ":"9000"
// }http://localhost:3000/admin/courses