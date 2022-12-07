var createError = require("http-errors");
var express = require("express");
var path = require("path");
const { resolve } = require("path");
const { rejects } = require("assert");

var port = 9000;

var app = express();



app.use(function (req, res, next) {
    console.log("adfasdfsdfasds");
  });

  app.listen(port, () =>
  console.log("server started and listen on port " + port)
);

const greeting = (name) => {
    return new Promise ((resolve, rejects )=>{
        if(name == "johan"){
            resolve ("hi  johan");
            getLocation("US").then((res)=>console.log(res))
            .catch((err)=>console.log(err));
        }else{
            rejects("bukan johan");
        }
    });
   
};


const getLocation = (location) =>{

    return new Promise ((resolve, rejects )=>{
        if(location == "USA"){
            resolve ("from USA");
        }else{
            rejects("Not from USA");
        }
    });
};


const appRunning = async () => {
    try {
        const theGreeting =  greeting("johan");
        const location =  getLocation("sdd");
        console.log(location);
        console.log(theGreeting);
    }catch(err){
        console.log(err);
    }
}

appRunning();

// const greet =  greeting("johan s");
// console.log(greet);
// greeting("johan")
// .then((res)=> console.log("inside then",res))
// .catch((err)=>console.log("inside catch",err));
// // .finally(()=>console.log("selesai"));

