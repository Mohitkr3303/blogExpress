const express = require("express");
const router = express.Router();
const blogs = require("../data/blogs");

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/blog",(req,res)=>{
    res.render("blogHome",{
        blogs:blogs
    });
});

router.get("/blogpost/:title",(req,res)=>{
    myblog = blogs.filter((item)=>item.title == req.params.title)

    res.render('blogPage',{
        title: myblog[0].title,
        content: myblog[0].content
    })
});

module.exports = router;