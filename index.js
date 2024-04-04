const express = require("express");
const app = express();
const router=require('./route');


const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({ limit: "50mb" }));
app.use('/',router);

app.set("view engine", "ejs");
 


app.listen(3000, () => {
  console.log(`server connected `);
});
