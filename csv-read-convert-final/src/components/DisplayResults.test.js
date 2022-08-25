/* Test for the DisplayResults component -- Tests render and text


Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */


import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import DisplayResults from './DisplayResults';

// Reset DOM
afterEach(() => {
    cleanup();
});

// Test for renderer
describe('Display Results Component', () => {
    // Variables to fill first row and first line of values
    const firstRow = ['Name', 'ID'];
    const data = [['Ana Paula', '1'], ['Regina', '2'], ['Salvador', '3']]; 
    // Variable for new data (second table)
    const newData = [['Akemi', '21'], ['Gina', '22'], ['Salva', '23']];

    // Component render --> mock screen 
    render(<DisplayResults tableRows={firstRow} values={data} 
        newValues={newData}/>);
    
    // save into variables
    const firstTable = screen.getByTestId("og table");
    const secondTable = screen.getByTestId("new table");

    // Test that tables are in document
    test('Table renderer', () => {
        expect(firstTable).toBeInTheDocument();
        expect(secondTable).toBeInTheDocument();
    });

    // Test text in tables
    test('Table data', () => {
        // For original table
        expect(firstTable).toHaveTextContent('Name');
        expect(firstTable).toHaveTextContent('ID');
        expect(firstTable).toHaveTextContent('Ana Paula');
        expect(firstTable).toHaveTextContent('1');
        expect(firstTable).toHaveTextContent('Regina');
        expect(firstTable).toHaveTextContent('2');
        expect(firstTable).toHaveTextContent('Salvador');
        expect(firstTable).toHaveTextContent('3');

        // For edited table
        expect(secondTable).toHaveTextContent('Name');
        expect(secondTable).toHaveTextContent('ID');
        expect(secondTable).toHaveTextContent('Akemi');
        expect(secondTable).toHaveTextContent('21');
        expect(secondTable).toHaveTextContent('Gina');
        expect(secondTable).toHaveTextContent('22');
        expect(secondTable).toHaveTextContent('Salva');
        expect(secondTable).toHaveTextContent('23');
    })
})