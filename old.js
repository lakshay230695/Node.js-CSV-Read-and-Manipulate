const csv = require('csv-parser');
//const parse = require('csv-parse');
const fs = require('fs');
var algebra = require('algebra.js');
var Expression = algebra.Expression;
var Equation = algebra.Equation;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    {id: '7', title: '7'},
    {id: '10', title: '10'},
    {id: '36', title: '36'},
    {id: '5', title: '5'},
    {id: '9', title: '9'},
    {id: '0', title: '0'},
    {id: '1', title: '1'},
    {id: '4', title: '4'},
    {id: '17', title: '17'},
    {id: '12', title: '12'},
    {id: '22', title: '22'},
  ]
});
//parse the file into inputFile variable



const csvData=[];

fs.createReadStream('input.csv')
  .pipe(csv())
  .on('data', (data) => {
    csvData.push(data);
    })
  .on('end', () => {
    console.log(csvData);
    csvWriter
      .writeRecords(csvData)
      .then(()=> console.log('The CSV file was written successfully'));
  });
