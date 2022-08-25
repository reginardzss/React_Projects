/* Test for the BuildTable component -- Tests render and text


Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */


import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import BuildTable from './BuildTable';

// Reset DOM
afterEach(() => {
    cleanup();
});

// Test for renderer
describe('Build Table Component', () => {
    // Variables to fill first row and first line of values
    const firstRow = ['Name', 'ID'];
    const data = [['Ana Paula', '1'], ['Regina', '2'], ['Salvador', '3']]; 

    // Component render --> mock screen 
    render(<BuildTable tableRows={firstRow} values={data} id={'table build'} />);
    // save into variable
    const tBuild = screen.getByTestId("table build");

    // Test that table is in document
    test('Table renderer', () => {
        expect(tBuild).toBeInTheDocument();
    });

    test('Table data', () => {
        expect(tBuild).toHaveTextContent('Name');
        expect(tBuild).toHaveTextContent('ID');
        expect(tBuild).toHaveTextContent('Ana Paula');
        expect(tBuild).toHaveTextContent('1');
        expect(tBuild).toHaveTextContent('Regina');
        expect(tBuild).toHaveTextContent('2');
        expect(tBuild).toHaveTextContent('Salvador');
        expect(tBuild).toHaveTextContent('3');
    })
})