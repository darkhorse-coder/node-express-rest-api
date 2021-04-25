const moment = require("moment-timezone");
const recordModel = require("../models/record");

exports.retrieve = async (req, res, next) => {
  try {
    const records = await recordModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: moment(req.body.startDate, "YYYY-MM-DD").toDate(),
            $lte: moment(req.body.endDate, "YYYY-MM-DD").toDate(),
          },
        },
      },

      {
        $project: {
          _id: 0,
          key: "$key",
          createdAt: "$createdAt",
          totalCount: { $sum: "$counts" },
        },
      },

      {
        $match: {
          totalCount: { $gte: req.body.minCount, $lte: req.body.maxCount },
        },
      },
    ]);

    return res.status(200).json({ code: 0, msg: "Success", records });
  } catch (error) {
    next(error);
  }
};
