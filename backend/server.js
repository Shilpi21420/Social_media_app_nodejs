const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(express.json());
app.use(cors());

// app.use((req,res)=>{
//     res.send("hlw");
//     console.log("Shilpi");
// })

app.get("/", (req, res) => {
    const sql = "SELECT * FROM media";
    db.query(sql, (err,data) => {
      if (err) return res.json("Error");
  
      return res.json(data);
    });
  });


app.post('/', (req,res)=>{
    const sql = "INSERT INTO media (`postlink`, `description`) VALUES(?)";
    const values = [
        req.body.postlink,
        req.body.postdes
    ]

    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("Create Error");

        return res.json(data);
    })
})

app.post('/comment', (req,res)=>{
    const sql = "INSERT INTO newcomeent (`comments`) VALUES(?)";
    const values = [
        req.body.comments,
    ]

    db.query(sql, [values], (err, data)=>{
        if(err) return res.json(err);

        return res.json(data);
    })
})

app.get("/comment", (req, res) => {
    const sql = "SELECT * FROM newcomeent";
    db.query(sql, (err,data) => {
      if (err) return res.json("Error");
  
      return res.json(data);
    });
  });


app.listen(8000);