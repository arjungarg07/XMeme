const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("../api/routes/index");

module.exports = async ({ app }) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/", routes);
  return app;
};
