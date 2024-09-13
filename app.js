const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const ResturantRouter = require("./routes/RestourantRouter");
const Hotel1Router = require("./routes/Hotel1Router");
const Hotel2Router = require("./routes/Hotel2Router");
const Hotel3Router = require("./routes/Hotel3Router");
const Hotel4Router = require("./routes/Hotel4Router");
const Hotel5Router = require("./routes/Hotel5Router");
const Hotel6Router = require("./routes/Hotel6Router");
const Hotel7Router = require("./routes/Hotel7Router");
const Hotel8Router = require("./routes/Hotel8Router");


const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

app.use("/api/resturant",ResturantRouter);
app.use("/api/hotel1",Hotel1Router);
app.use("/api/hotel2",Hotel2Router);
app.use("/api/hotel3",Hotel3Router);
app.use("/api/hotel4",Hotel4Router);
app.use("/api/hotel5",Hotel5Router);
app.use("/api/hotel6",Hotel6Router);
app.use("/api/hotel7",Hotel7Router);
app.use("/api/hotel8",Hotel8Router);


module.exports=app;