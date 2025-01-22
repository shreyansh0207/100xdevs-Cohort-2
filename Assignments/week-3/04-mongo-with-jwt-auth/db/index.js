const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shuklashreyansh0207:gFyxp0L0uz3tgoQ8@cluster0.vlkn4.mongodb.net/course_selling_jwt');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchaseCourse : [{
        ref : "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title :String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}