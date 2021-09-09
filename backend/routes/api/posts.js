var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Post = require("../../models/Post");

router.get("/", (req, res) => {
    Post.find({})
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((err) => console.log(err));
});

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        console.log(req.body.title);

        const newPost = new Post({
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            author: req.body.author,
        });

        newPost
            .save()
            .then(() => res.status(200).json("Post created successfully"))
            .catch((err) => console.log(err));
    }
);

module.exports = router;
