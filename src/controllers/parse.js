const express = require('express');
const parseRoute = express.Router();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const request = require('request');


    parseRoute.get('/', (req,res)=>{

        request('https://es.lipsum.com/', (err, resParse, body) => {
            if (err) { 
                return console.log(err); 
            }else{
                const dom = new JSDOM(body);
                const listText = dom.window.document.querySelectorAll("p");
                console.log(listText);
                var text="";
                listText.forEach(element => {
                    text = text + element.textContent + "</br></br>"
                });
                res.send(text);
            }
          
          });
      
        });

module.exports = parseRoute;