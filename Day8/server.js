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

const studentData= {
    kaif:{collage:"mit", year:"pasout", sem:"8", strem:"cse"},
    mofi:{collage:"mip", year:"pasout", sem:"6", strem:"me"},
    aysha:{collage:"mit", year:"pasout", sem:"8", strem:"cse"},
}

app.get("/:name", async(req,res)=>{
    try {
        const {name}=req.params;
        console.log(name)

        res.json({data: studentData[name]});
    } catch (error) {
        console.log(error);
    }
})
app.listen(PORT, () => {
  console.log("App is running on the port", PORT);
});
