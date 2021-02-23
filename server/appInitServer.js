require("dotenv/config");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');

const corsConfig = require("./configuration/cors");
const {databaseConnection} = require("./configuration/mongo");
const {customErrorHandler} = require("./error_handlers");

const initServer = ()=>{ 
	
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(cookieParser());
	app.use(cors(corsConfig));

	app.use(customErrorHandler);
	databaseConnection(process.env.MONGO_URI);
	
	return app;
}

module.exports = initServer();