/*Component that builds a table structure.

Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 
*/

// Import libraries
import React from 'react'
import './AskCSV.css';

// Function to build table
export default function BuildTable({tableRows, values, id}) {
  return (
    <div className="body">
        <table data-testid={id}>
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
    </div>
  )
}

/* References 
Mandal, M. (). How to parse or read CSV files in React.js. [website]. Retrieved
from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
*/