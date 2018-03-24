const testRoute = require("./test");
const versionRoute = require("./version");
const parseRoute = require("./parse");

const setControllers = (app)=>{
    app.use("/testing",testRoute);
    app.use("/version",versionRoute);
    app.use("/parse",parseRoute);

};

module.exports={setControllers};