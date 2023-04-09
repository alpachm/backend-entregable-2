require('dotenv').config();
const app = require('./app');
const { dbUsers, dbTransfers } = require('./database/config');

dbUsers
  .authenticate()
  .then((res) => console.log('DB users is aunthenticated'))
  .catch((err) => console.log(err));

dbTransfers
  .authenticate()
  .then((res) => console.log('DB transfers is authenticated'))
  .catch((err) => console.log(err));

dbUsers
  .sync()
  .then((res) => console.log('DB users is synced'))
  .catch((err) => console.log(err));

dbTransfers
  .sync()
  .then((res) => console.log('DB transfers is synced'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3200;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
