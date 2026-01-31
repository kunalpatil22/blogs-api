const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger.js");

const blogsRoutes = require("./routes/blogs.routes");

const port = process.env.PORT || 8080;
const mongo_uri = process.env.MONGO_URI;

const app = express();

app.set("trust proxy", true);

app.use(express.json());

app.use("/api/blogs", blogsRoutes);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Database connection established.");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.listen(port, () => console.log(`Server running on port ${port}.`));
