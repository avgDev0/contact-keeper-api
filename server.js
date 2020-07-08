const express = require("express");
const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({ message: "Welcome mate" }));

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server starter at port ${PORT}`);
});
