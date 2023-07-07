const express = require("express");
const router = express.Router();
const supabase = require("../database/dbConnect.js");

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("dogs").select("*");
    if (data) {
      if (!data.length) {
        res.status(404);
        res.send("Data not found");
      }
      res.status(200).json({ status: "success", data: data });
    } else if (error) {
      res.status(500);
      console.log(error);
      res.send("Server Error");
    } else {
      res.status(404);
      res.send("Cannot find data");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:dogId", async (req, res) => {
  const query = req.params.dogId;
  try {
    const { data, error } = await supabase
      .from("dogs")
      .select("*")
      .eq("id", query);
    if (data) {
      if (!data.length) {
        res.status(404);
        res.send("Data not found");
      }
      res.status(200).json({ status: "success", data: data });
    } else if (error) {
      res.status(500);
      console.log(error);
      res.send("Server Error");
    } else {
      res.status(404);
      res.send("Cannot find data");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
