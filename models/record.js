const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },

    counts: [
      {
        type: Number,
      },
    ],

	 createdAt: {
		 type: String,
		 required: true,
	 },

	 totalCount: {
		 type: Number,
		 required: true,
	 }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("record", recordSchema);
