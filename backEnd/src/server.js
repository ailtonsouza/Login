const express = require("express");
require("express-async-errors");
const routes = require("./routes");
require("./database");
const cors = require("cors");
const app = express();
const AppError = require("../src/utils/AppError");



app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333);
