/**
 * Required External Modules
 */
import express = require("express");
import * as path from "path";
import * as bodyParser from "body-parser";
import index from "./routes/index";
import userApi from "./rest/accountSignupApi";

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8080";

/**
 *  App Configuration
 */


app.use(express.json());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);
app.use("/user/signup", userApi);

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening to requests on http://localhost:${port}`);
});