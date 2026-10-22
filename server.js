const express = require("express");
const app = express() ;
const path = require("path");
const port =  5000; 

let tasks = [];
let  Nid = 1 ;

app.use(express.json());
// ده عشان يقراء فايلات الجسون و يتعامل معاه 
app.use(express.static(path.join(__dirname, "public")));
//ده عشان اقوله هتاخد من الفولدر بابليك الفايلس 

//app.use(express.urlencoded({extends:true}));
/*ده عشان يخليه يعرف يتعامل مع البينات الى هتيجى من الفورم */ 

app.get("/tasks", (req, res) => {
  res.json(tasks);
});
app.post("/tasks",(req, res)=>{
    const task = req.body.title ;
    if(!task || !task.trim() )
        {
            return res.status(400).json({
                message: "task you need "
            });
        }

        const newtask ={
            id : Nid++ ,
            title : task.trim() 
        };
        tasks.push(newtask);

        res.status(201).json(newtask);
});
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "المهمة غير موجودة"
    });
  }

  tasks.splice(taskIndex, 1);

  res.status(204).send();
});


app.listen(port ,()=>{
    console.log(`Server is running at http://localhost:${port}`);
}); 