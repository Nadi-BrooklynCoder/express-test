const app = require('./app');

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(3003, () => {
    console.log(`Listening on port: ${PORT}`);
})