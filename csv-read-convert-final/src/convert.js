function changeGrade(grade) {
    let letter = 'E';
    if(grade >= 93) {
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

function changeDate(date)
{
    const [day, month, year] = date.split('/');
    return [month, day, year].join('/');
}

function noSurname(fullName){
    const [name, surname1, ] = fullName.split(' ');
    return [name, surname1].join(' ');
}

function format_line([id, theName, mat, date, grade]) {
    return [
      id,
      noSurname(theName),
      mat + "@tec.mx",
      changeDate(date),
      changeGrade(grade)
    ];
  }
  
  export {changeGrade, changeDate, noSurname, format_line};