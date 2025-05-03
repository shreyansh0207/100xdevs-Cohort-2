const expres  = require('express');
const app = expres();

app.get("/get",(req,res) => {
    res.send("Hello worlds")
})
app.post("/post",(req,res)=>{
    res.send("Hello post");
})
app.put("/put",(req,res)=>{
    res.send("Hello put");
})
app.delete("/delete",(req,res)=>{
    res.send("Hello delete");
})
// app.listen(3000,() =>{
//     console.log("Server is running on port 3000")
// })