//import { csvInjectionProtector } from 'csv-injection-protector';

const tsv = require('tsv-parser');
const csv = require('csv-parser');
//const parse = require('csv-parse');
const fs = require('fs');
const csvData=[];
//Dictionary if columns to numbers pairs
var pairs={'A':'7','B':'10','C':'36','D':'5','E':'9','F':'0','G':'1','H':'4','I':'17','J':'12','K':'22'};



fs.createReadStream('input.tsv')
  .pipe(csv())
  .on('data', (data) => {

    //Calculates then adds to csvData array

    //For each data entry (row)
    for (let [k,v] of Object.entries(data)) {
      //Replace each key in pairs by its dictionary value
      if (v[0] == "+"){

      }
      else {
        v=v.replace(/[A-Z]/g,m=>pairs[m]);
      }
      //When all replacement finished
      v=eval(v)
      data[k]=v;  //Reassign its key value pair
    }

    csvData.push(data); //Adds to array

  })
  .on('end', ( ) => {
    //Stringify and write to file
    var stringData="7,10,6,5,9,0,1,4,17,12,22\n";  //Convert data to string
    //Attach each data in csvData, convert to string and join with commas
    for (let index = 0; index < csvData.length; index++) {
      var e=csvData[index];
      stringData+=Object.values(e).join(',')+"\n";    //Append

    }
    console.log(stringData);  //string data
    //Create writer object
    let w=fs.createWriteStream('output.csv');
    //Writes to file
    w.write(stringData);

  });
