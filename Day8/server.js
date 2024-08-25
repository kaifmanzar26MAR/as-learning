//node.js
// ---> it is enviroment, to connect browser and the js..
// differnce btw node and rect.js
// node is the enviroment, where react is the library of js.
// node js used for backend dev, where as react for the frontend.

// express for making the server...
// step 1-> install the node js in the pc (if alredy done skip it)
// step 2-> install the express on your folder
//    npm -> node package maneger

const PORT = 8000;
const express = require("express");
const bodyParser= require("body-parser")

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
    // res.send("hiii")
  res.status(200).json({ data: { name: "kaif project", number: "9498934" } });
});
app.post("/getname", async(req, res)=>{
    try {
        const {name}=req.body;
        console.log(name);
        res.status(200).json({name:name})
    } catch (error) {
        console.log(error);
    }
})

app.get("/getnamebyget/:name",async(req, res)=>{
    try {
        const {name}= req.params;
        console.log(name);
        res.status(200).json({name:name})
    } catch (error) {
        
    }
} )

const  students=[
    { id: 1, name: "Kaif", phone:862962002,email:"kaif123@gmail.com",qualification: "B.Tech",Clg:"MIT" , PassoutYear:2024,address: "Delhi" },
    { id: 2, name: "Mofi", phone:8915424719,email:"mofi178@gmail.com",qualification: "Diploma",Clg:"MIP" , PassoutYear:2024,address: "West Bengal" },
    { id: 3, name: "Ayesha", phone:9083444911,email:"ayehsa123@gmail.com",qualification: "B.Tech",Clg:"MIT" , PassoutYear:2025,address: "West Mediniput" },

];

app.get("/:name", async(req,res)=>{
    try {
        const {name}=req.params;
        console.log(name)

        res.json({data: students[name]});
    } catch (error) {
        console.log(error);
    }
})

app.post('/user/:id/updateemail', (req, res)=>{
    try {
        const {email}= req.body;
        console.log(req.body)
        const {id}= req.params;

        // req.body= { name: "kaif ", email:"kaif@gmail.com", mobile:"e0eru2038"}

        if(email.trim() === ""){
            throw new Error("Email is empty!!");
        }

        const userIndex= students.findIndex((student)=> student.id.toString()===id.toString());

        if(userIndex<0){
            throw new Error("No user found with given id!!")
        }
console.log(students[userIndex].email)
        students[userIndex].email=email;

        return res.status(200).json({updated:students[userIndex], message:" user email updated"})

    } catch (error) {
        console.log(error);
    }
})

app.get("/user/:id", (req,res)=>{
    const {id}= req.params;
    console.log(id)
    const user= students.find((student)=>student.id.toString()===id.toString());
    console.log(user)
    return res.status(200).json(user)
})
app.listen(PORT, () => {
  console.log("App is running on the port", PORT);
});
