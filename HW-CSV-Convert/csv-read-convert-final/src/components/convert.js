/* Code that converts data (grade, date, name, and formats lines)


Ana Paula Katsuda - A01025303
Regina Rodriguez - A01284329
Salvador Federico Milanes - A01029956 */


// Function to change grade (from numerical to A-E)
function changeGrade(grade) {
    // Initial value of letter --> if grade is lower than 64
    let letter = 'E';
    // Conditions to stablish alphabetical grade
    if(grade >= 97) {
        letter = 'A+'; 
    } else if(grade >= 93) {
        letter = 'A';
    } else if(grade >= 90) {
        letter = 'A-';
    } else if(grade >= 87) {
        letter = 'B+';
    } else if(grade >= 83) {
        letter = 'B';
    } else if(grade >= 80) {
        letter = 'B-';
    } else if(grade >= 77) {
        letter = 'C+';
    } else if(grade >= 73) {
        letter = 'C';
    } else if(grade >= 70) {
        letter = 'C-';
    } else if(grade >= 67) {
        letter = 'D+';
    } else if(grade >= 64) {
        letter = 'D';
    }
    return letter;
}

// Function to change date format
function changeDate(date)
{
    // Save day, month and year
    const [day, month, year] = date.split('/');
    // Re-order day, month and year using /
    return [month, day, year].join('/');
}

// Function to delete the second surname
function noSurname(fullName){
    // Save name and first surname (identify using spaces)
    const [name, surname1, ] = fullName.split(' ');
    // Return only name with first surname
    return [name, surname1].join(' ');
}

// Function that orders line 
function format_line([id, theName, mat, date, grade]) {
    // order line
    return [
      id,
      noSurname(theName), // change name
      mat + "@tec.mx", // change id for mail
      changeDate(date), // change date
      changeGrade(grade) // change grade
    ];
  }
  
  // Export functions 
  export {changeGrade, changeDate, noSurname, format_line};