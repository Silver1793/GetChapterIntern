/**
 * Richard Li
 * This is the backend of the program, it uses express js
 * This backend tries to sort through the data from medicare_plans.txt and puts the neccessary information into an array called users
 * Then it creates a endpoint and sends the users array from the endpoint
 */
const express = require('express'); //uses express js
const app = express();
const fs = require("fs");
const port = 3001; //sets the port to 3001

const oLines = fs.readFileSync("medicare_plans.txt").toString().split("\n"); //Reads the data file and splits at every section data entry

let users = [];//Creates an array
for(let i = 1; i < oLines.length-1; i++){//Creates a for loop that goes until the number of data entries -2, the last line is blank in the data entry
   var apple = oLines[i].toString().split("\t")[6]; //Splits the information every \t and gets the 7th field which is the company ID
   var ban = apple.split("_")[0]+"-"+apple.split("_")[1] +"-"+apple.split("_")[2]+"00";//Splits the Id into a xxxxx-xxx-xxx format and sets it to a variable
    users.push({//Pushes the following fields into the user array
        bID: oLines[i].toString().split("\t")[6], //pushes the xxxxx_xxx_x ID format into the bId field of the array
        bID2: ban, //pushes the xxxxx-xxx-xxx ID format into bID2 field of the array
        Organization: oLines[i].toString().split("\t")[21], //pushes the organization data into the Organization field of the array
        PlanName: oLines[i].toString().split("\t")[24], //pushes the plan name data into the PlanName field of the array
        Website: oLines[i].toString().split("\t")[23], //pushes the website data into the Website field of the array
        GeographicArea: oLines[i].toString().split("\t")[35] // pushes the geographic location data into the GeographicArea field of the array
    });
}
app.get('/ed', function(req,res){//creates the endpoint ed
    res.send({users}); //sends the array users from the endpoint ed
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`))