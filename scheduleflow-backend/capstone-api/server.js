const express = require("express");
const app = express();
const cors = require("cors");
const {PORT} = require("./config")
const morgan = require("morgan")
const scheduleRoute = require("./routes/schedules")
const authRoute = require("./routes/auth")

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))
app.use("/", scheduleRoute)
app.use("/auth", authRoute)

// TEST ROUTE
app.get("/",(req, res) => {res.send('pong')})

//Run server on the following port
app.listen(PORT, () => {
  console.log(`🚀Server running on Port ${PORT}`);
});
