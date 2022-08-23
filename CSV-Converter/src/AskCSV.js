import React from 'react'
import Papa from "papaparse";
import { format_line } from './convert';
import { useState } from 'react'; 

export default function AskCSV() {
    // State to store parsed data
    //const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    //State to store the values
    const [values, setValues] = useState([]);

    // Storage for converted values
    const [newValues, setNewValues] = useState([]);

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];
                const newValuesArray = [];
        
                // Iterating data to get column name and their values
                results.data.map((d) => {
                  rowsArray.push(Object.keys(d));
                  valuesArray.push(Object.values(d));
                  newValuesArray.push(format_line(Object.values(d)));
                  return null;
                });
        
                // Parsed Data Response in array format
                //setParsedData(results.data);
        
                // Filtered Column Names
                setTableRows(rowsArray[0]);
        
                // Filtered Values
                setValues(valuesArray);
                setNewValues(newValuesArray);
              },
            });
          };
    return (
        <div>
            <h2>Place here your CSV</h2>
            <input
            type="file"
            name="file"
            accept=".csv"
            onChange={changeHandler}
            style={{ display: "block", margin: "10px auto" }}
        />
        <br />
        <br />
        {/* Table for initial data*/}
        <h4>Original Data</h4>
        <table>
            <thead>
            <tr>
                {tableRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
                })}
            </tr>
            </thead>
            <tbody>
                {values.map((value, index) => {
                    return (
                    <tr key={index}>
                        {value.map((val, i) => {
                        return <td key={i}>{val}</td>;
                        })}
                    </tr>
                    );
                })}
            </tbody>
        </table>
        <br />
            
        {/*Table for edited data*/}
        <h4>Edited Data</h4>
        <table>
            <thead>
            <tr>
                {tableRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
                })}
            </tr>
            </thead>
            <tbody>
                {newValues.map((value, index) => {
                    return (
                    <tr key={index}>
                        {value.map((val, i) => {
                        return <td key={i}>{val}</td>;
                        })}
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  );
}
