const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User"); //the order can make a difference i.e.it should come above
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app); //require will immediatelly will turn into a function which we will call by app object

console.log("😊😊", process.env);

// if (process.env.NODE_ENV === "production") {
//   //express will serve up production assets
//   //like our main.js file, or main.css file
//   app.use(express.static("client/build"));

//   //Express will serve up the index.html file
//   //if it doesn't recognize the route
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000; //5000, if running server locally
app.listen(PORT);
