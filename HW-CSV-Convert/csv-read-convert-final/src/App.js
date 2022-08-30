/* App that calls components

Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */


import './App.css';
import { useState } from 'react';
import AskCSV from './components/AskCSV';
import DisplayResults from './components/DisplayResults';

function App() {
  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  // Storage for converted values
  const [newValues, setNewValues] = useState([]);

  return (
    <>
      <AskCSV 
      setTableRows={setTableRows}
      setValues={setValues}
      setNewValues={setNewValues}/>
      <DisplayResults 
      tableRows={tableRows}
      values={values}
      newValues={newValues}
      />
    </>
  )
}

export default App;

/*Disclaimer: The current app was created based on the class topics, 
internet tutorials and Gil Echeverría's examples in class. For 
references to the tutorials, view each file. */