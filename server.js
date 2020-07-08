const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({ message: "Welcome mate" }));

app.listen(PORT, () => {
  console.log(`Server starter at port ${PORT}`);
});
