let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);
});
