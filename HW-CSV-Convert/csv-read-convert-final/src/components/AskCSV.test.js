/* Test for the AskCSV component -- Tests render


Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */


import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import AskCSV from "./AskCSV";

// Reset DOM
afterEach(() => {
    cleanup();
});

// Test for renderer
describe('AskCSV component', () => {
    // Component render --> mock screen 
    render(<AskCSV />);
    // save into variable
    const csv = screen.getByTestId("csv");
    // Test 
    test('CSV renderer', () => {
        expect(csv).toBeInTheDocument();
    });
})