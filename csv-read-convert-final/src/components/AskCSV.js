/* Code that asks for a csv file and parses it


Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */


//Import Libraries
import React from 'react'
import Papa from "papaparse";
import { format_line } from './convert';
import './AskCSV.css';
import csvlogo from './csvlogo.svg';

// Function that asks CSV
export default function AskCSV(props) {
    // Change Handler
    const changeHandler = (event) => {
        // Parse data
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                // Save rows
                const rowsArray = [];
                // Save values
                const valuesArray = [];
                // Save edited values
                const newValuesArray = [];
        
                // Iterating data to get column name and their values
                results.data.map((d) => {
                // Add to rows
                  rowsArray.push(Object.keys(d));
                //Add to values
                  valuesArray.push(Object.values(d));
                // Add edited values
                  newValuesArray.push(format_line(Object.values(d)));
                  return null;
                });
        
                // Filtered Column Names
                props.setTableRows(rowsArray[0]);
        
                // Filtered Values
                props.setValues(valuesArray);

                // New values
                props.setNewValues(newValuesArray);
              },
            });
          };
    return (
        <div>
            <div className="header">
                <h1 className="headerText"> CSV Converter</h1>
                <img src={csvlogo} alt="CSV logo" className="imgCSV"/>
            </div>

            <div className="body">
                <div className="selectContainer">
                    <h2 className="selectContainerTitle">Place here your CSV</h2>
                    <input
                        type="file"
                        name="file"
                        data-testid="csv"
                        accept=".csv"
                        onChange={changeHandler}
                        style={{ display: "block", margin: "10px auto" }}
                    />  
                </div>
            </div>
        </div>
  );
}

/* References 
Mandal, M. (). How to parse or read CSV files in React.js. [website]. Retrieved
from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
*/