const express = require("express");
const bodyParser = require("body-parser");
const date =require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const items = ["cook food", "made food", "eat food"];
const workItems = ["devops","development","quality"];


// let today = new Date();

// let options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
// };

// let day = today.toLocaleDateString("en-US", options);




app.get("/", (req, res) => {
  // let currentDay= today.getDate();
let day= date.getDate();
  res.render("page", { listTitle: day, newListItems: items });
});




app.post("/", (req, res) => {
  let item = req.body.newItem;

  if(req.body.list === "work"){
    workItems.push(item);
    res.redirect("/work");
  }
else{
    items.push(item);
    res.redirect("/");
}
  console.log("responding");
});




app.get("/work",(req,res)=>{
    res.render("page",{listTitle:"work list", newListItems: workItems});
})




// app.post("/work", function(res,req){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })
app.listen(3000, function () {
  console.log(`Server running on port 3000`);
});
