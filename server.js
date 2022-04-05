const path = require("path");
const express = require("express");

const NODE_ENV_DEV = "production";
const nodeEnv = process.env.NODE_ENV || NODE_ENV_DEV;
process.env.NODE_ENV = nodeEnv;
console.log(`nodeEnv: ${nodeEnv}`);

const DIST_DIR = path.join(__dirname, "dist");
const PORT = 3000;
const app = express();
const port = process.env.PORT || 3000;

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  let fileFullPath = join(DIST_DIR, req.path);
  res.sendFile(fileFullPath);
});

app.listen(port, function () {
  console.log(`${new Date()} - app is listening on port: ${port}`);
});
