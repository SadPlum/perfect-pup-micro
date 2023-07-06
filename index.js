const express = require("express");
const cors = require("cors");
const supabase = require("./database/dbConnect.js");


const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Perfect-Pup-Server");
});

app.use(express.static("public"));

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});

app.get("/test", async (req, res) => {
  try {
    const { data, error } = await supabase.from("dogs").select("*");
    if (data) {
      res.status(200).json({ status: "success", data: data });
    }
    if (!data) {
      res.send("no data");
    }
    if (error) throw error;
  } catch (err) {
    console.log(err);
  }
});
