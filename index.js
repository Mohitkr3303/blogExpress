const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const exphbs = require('express-handlebars'); 

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars'); 

app.use(express.static(path.join(__dirname,"static")));
app.use("/",require(path.join(__dirname,"routes/blog.js")));

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})