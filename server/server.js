// Budget API
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
/*const budget = {
  myBudget: [
    {
      title: "Eat out",
      budget: 30,
    },
    {
      title: "Rent",
      budget: 350,
    },
    {
      title: "Rent",
      budget: 90,
    },
  ],
};*/
app.use(cors());
//app.use('/', express.static('public'));
app.get('/budget', (req, res) => {
  const budget = require('./budget.json');
  res.json(budget);

});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
