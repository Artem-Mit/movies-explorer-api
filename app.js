const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const { errors } = require("celebrate");
const { PORT, MONGODB_URL } = require("./utils/config");
const { limiter } = require("./middlewares/limiter");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/index");

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URL);

app.use(cors());
app.use(limiter);
app.use(helmet());
app.use(bodyParser.json());
app.use(requestLogger);
app.use("/", router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
