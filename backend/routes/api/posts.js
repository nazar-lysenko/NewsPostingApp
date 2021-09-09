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

const posts = [
    {
        id: "1",
        title: "Title 1",
        imageUrl:
            "https://habrastorage.org/getpro/habr/upload_files/83d/628/7c1/83d6287c1927aaa6c7b86adb0ff1341a.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus alias magnam voluptate porro, nostrum consequuntur sed asperiores hic iure quam! Animi magni quisquam tenetur cum excepturi? Nihil reprehenderit non aliquam?",
        author: "Some author 1",
    },
    {
        id: "2",
        title: "Title 2",
        imageUrl:
            "https://habrastorage.org/getpro/habr/upload_files/83d/628/7c1/83d6287c1927aaa6c7b86adb0ff1341a.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus alias magnam voluptate porro, nostrum consequuntur sed asperiores hic iure quam! Animi magni quisquam tenetur cum excepturi? Nihil reprehenderit non aliquam?",
        author: "Some author 3",
    },
    {
        id: "3",
        title: "Title 3",
        imageUrl:
            "https://habrastorage.org/getpro/habr/upload_files/83d/628/7c1/83d6287c1927aaa6c7b86adb0ff1341a.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus alias magnam voluptate porro, nostrum consequuntur sed asperiores hic iure quam! Animi magni quisquam tenetur cum excepturi? Nihil reprehenderit non aliquam?",
        author: "Some author 3",
    },
    {
        id: "4",
        title: "Title 4",
        imageUrl:
            "https://habrastorage.org/getpro/habr/upload_files/83d/628/7c1/83d6287c1927aaa6c7b86adb0ff1341a.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus alias magnam voluptate porro, nostrum consequuntur sed asperiores hic iure quam! Animi magni quisquam tenetur cum excepturi? Nihil reprehenderit non aliquam?",
        author: "Some author 4",
    },
    {
        id: "5",
        title: "Title 5",
        imageUrl:
            "https://habrastorage.org/getpro/habr/upload_files/83d/628/7c1/83d6287c1927aaa6c7b86adb0ff1341a.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus alias magnam voluptate porro, nostrum consequuntur sed asperiores hic iure quam! Animi magni quisquam tenetur cum excepturi? Nihil reprehenderit non aliquam?",
        author: "Some author 5",
    },
];

module.exports = router;
