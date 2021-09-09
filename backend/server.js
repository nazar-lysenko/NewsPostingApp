const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbUri = keys.mongoURI;

mongoose
    .connect(dbUri, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

/* app.use("/api/posts*", (req, res, next) => {
    const bearerToken = req.header("Authorization");

    console.log("inside interceptor");

    if (!bearerToken) {
        return res
            .status(400)
            .json({ error: "Please sign in to view all posts" });
    }

    const token = bearerToken.substring(7);

    jwt.verify(token, keys.secretOrKey, (err, decoded) => {
        if (err) {
            console.log("Inside interceptor");
            return res.status(400).json({ error: "Incorrect Token" });
        }
        next();
    });
}); */

app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
