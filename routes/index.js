const express = require("express");
const record = require("../routes/record");
const router = express.Router();

router.use("/records", record);

router.use((error, req, res, next) => {
  if (error.error && error.error.details.length > 0) {
    return res.status(400).json({
      code: 400,
      msg: error.error.details[0].message,
    });
  } else {
    if (error.code) {
      return res.status(error.code).json({ msg: error.message });
    } else {
      return res.status(500).json({
        code: 500,
        msg: error.message || "Server Internal Error",
      });
    }
  }
});

module.exports = router;
