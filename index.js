const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("./db/knex.js");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Im working babyyyyyy! :))))))))))))))");
});

app.get("/mid_table", async (req, res) => {
  try {
    const allUser = await knex("mid_database").select("*").from("mid_table");
    res.status(200).send(allUser);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log("SERVER IS RUNNING, RUN!!!🏃👨‍💻");
});
