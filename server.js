//DEPENDENCIES
const app = require("./app");
require("dotenv").config();

//CONFIG
const PORT = process.env.PORT;

//LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
