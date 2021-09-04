const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbUri = require("./config/keys").mongoURI;

mongoose
    .connect(dbUri, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
