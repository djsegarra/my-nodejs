var express = require('express');
var versionRoute = express.Router();
const pacakgejson = require("../../package.json");

    versionRoute.get('/', (req,res)=>{
        res.send("Version : " + pacakgejson.version);
    });



module.exports = versionRoute;