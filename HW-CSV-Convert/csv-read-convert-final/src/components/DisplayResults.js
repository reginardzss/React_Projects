/* Code that builds two tables: one for the original data and one for
the edited data


Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */

import React from 'react'
import BuildTable from './BuildTable';

// Function to display results (both tables)
export default function DisplayResults(props) {
  return (
    <div className="body" >
        <h4>Original Data</h4>
        <BuildTable 
        tableRows={props.tableRows}
        values={props.values} id='og table'/>
        <br/>
        <br/>
        <h4>Edited Data</h4>
        <BuildTable 
        tableRows={props.tableRows}
        values={props.newValues} id='new table'/>
    </div>
  )
}

/* References 
Mandal, M. (). How to parse or read CSV files in React.js. [website]. Retrieved
from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
*/