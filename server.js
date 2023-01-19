const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.set("trust proxy", true);

app.get("/", (req, res) => {
  console.log(req.ip);
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
