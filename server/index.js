const express = require("express");
const cors = require("cors");
const authMiddleware = require("./middleware/auth-middleware");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());


app.use("/", authMiddleware);

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.listen(PORT, () => console.log("The server is running on http://localhost:${PORT}"));