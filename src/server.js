const express = require ('express');
const app = express();



const controllers =  require('./controllers');

const init = () =>{
    app.listen (3000);
    controllers.setControllers(app);
    app.get('/', (req,res)=>{
        res.send("Arrancado");
    });
    console.log ("Escuchando puerto 3000");

};

module.exports = {init};

