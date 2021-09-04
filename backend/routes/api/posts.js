var express = require("express");
var router = express.Router();

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

router.get("/", function (req, res, next) {
    res.json(posts);
});

module.exports = router;
