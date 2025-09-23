const express = require("express");
const app = express();
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of age yet",
    });
  }
}
app.use(isOldEnoughMiddleware);
app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have succesfully riden the ride1",
  });
});
app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have succesfully riden the ride2",
  });
});
app.listen(3000);
