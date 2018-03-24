var express = require('express');
var testRoute = express.Router();
var sleep = require('sleep');
const fs = require('fs');


    testRoute.get("/",(req,res)=>{
        res.end("Testing root");   
    });

    testRoute.get("/download",(req,res)=>{
        res.download("./src/big.txt");
    });

    testRoute.get("/downloadOk",(req,res)=>{
        const src = fs.createReadStream('./src/big.txt');
        
        src.pipe(res).on("finish",()=>{
         console.log ("Download terminada");   
         });
    });

    testRoute.get("/downloadBad",(req,res)=>{
        fs.readFile ("./src/big2.txt", (err,data) => {
            if (err) throw err;
            res.end(data);
        });
  
    });

    testRoute.get("/block",(req,res)=>{
            waitFor(5000).then(()=>{
                res.end("Acabo el bloqueo");
            });
           
        });
  
    testRoute.get("/sleep",async (req,res)=>{
            await waitFor(5000);
            res.end("Acabo despues del wait"); 
    });

const waitFor = (ms) => new Promise((r) => setTimeout(r, ms))

function funcionBloqueante () {
    sleep.sleep(10);
    console.log("Acabo el sleep");
};

 function asyncFuncionBloqueante (){
    const promise = new Promise((resolve, reject) =>{
        console.log("Entro en el promise");
        funcionBloqueante();
        resolve();
    });

    return promise;
}

module.exports = testRoute;