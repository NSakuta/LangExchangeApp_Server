const verifySignUp = require("../middleware/verifySignUp");
const controller = require("../controllers/auth.controller");
const router = require('express').Router();
const imageUpload = require('../middleware/upload')


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token"
    );
    next();
  });

  router.post("/auth/signup", controller.signup);
  router.post("/auth/signin", controller.signin);

  app.use("/api", router);

};