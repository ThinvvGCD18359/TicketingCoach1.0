const express = require("express");
const cors = require("cors");
const authMiddleware = require("./middleware/auth-middleware");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());


app.use("/", authMiddleware);

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.listen(PORT, () => console.log("The server is running on http://localhost:${PORT}"));