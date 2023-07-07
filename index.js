const express = require("express");
const cors = require("cors");

const publicRouter = require("./utils/publicRouter.js");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Perfect-Pup-Server");
});

app.use(express.static("public"));

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});

app.use("/dogs", publicRouter);
