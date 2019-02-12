const mongoose = require("mongoose");
const Report = require("../models/reports");

mongoose.connect(`mongodb://localhost/bikenotifier`);

const reports = [
  {
    content:
      "11111111111111111111111111111111111111111111111111111111111111111",

    picPath: "String",
    picName: "String",
    nature: "damage",
    severity: "light",
    state: "done",
    likes: 3,
    dislikes: 3
  },

  {
    content: "2222222222222222222222222222222222222222222222222222222222222",

    picPath: "String",
    picName: "String",
    nature: "infrastructure",
    severity: "serious",
    state: "done",
    likes: 6,
    dislikes: 2
  },

  {
    content:
      "33333333333333333333333333333333333333333333333333333333333333333333",

    picPath: "String",
    picName: "String",
    nature: "damage",
    severity: "light",
    state: "in process",
    likes: 5,
    dislikes: 8
  }
];
Report.create(reports, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${reports.length} reports`);
  mongoose.connection.close();
});
