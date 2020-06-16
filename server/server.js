const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./routes/user.routes")(app);
require("./routes/bxcharacter.routes")(app);
require("./config/mongoose.config");
require("./config/jwt.config");

app.listen(8000, () => console.log("Listening on port: 8000"));