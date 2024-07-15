const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogs");
const { title } = require("process");

router.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../template/index.html"));
    res.render("home");
});

router.get("/blog",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../views/blogHome.html"));

    res.render("blogHome",{
        blogs:blogs
    });
});

router.get("/blogpost/:title",(req,res)=>{
    myblog = blogs.filter((item)=>item.title == req.params.title)
    // console.log(myblog);
    // res.sendFile(path.join(__dirname,"../views/blogpage.html"));

    res.render('blogPage',{
        title: myblog[0].title,
        content: myblog[0].content
    })
});

module.exports = router;