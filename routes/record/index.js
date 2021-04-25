const express = require("express");
const recordCtr = require("../../controllers/record");
const expressValidation = require("express-joi-validation");
const validateSchema = require("./validateSchema");
const validator = expressValidation.createValidator({ passError: true });
const router = express.Router();

router.post(
  "/",
  validator.body(validateSchema.retrieve.body),
  recordCtr.retrieve
);

module.exports = router;
