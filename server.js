require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('Database Authenticate'))
  .catch((error) => console.log(error));

db.sync()
  .then((res) => console.log('Sync database'))
  .catch((err) => console.log(err));

const port = +process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`App Runnig on sport ${port}`);
});
