/**
 * Write an interface named Students that accepts the
 * following elements:
 * firstName(string),
 * lastName(string),
 * age(number),
 * location(string)
 */

export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two students, and create an array named studentsList
 * containing the two variables.
 */

const student1: Student = {
  firstName: 'Eric',
  lastName: 'Acquah',
  age: 23,
  location: 'Accra',
};

const student2: Student = {
  firstName: 'Chioma',
  lastName: 'Ukora',
  age: 25,
  location: 'Asaba',
};

// The students array
const studentsList: Array<Student> = [
  student1,
  student2,
];

/**
 * Using Vanilla Javascript, render a table and for each elements in the array, * append a new row to the table
 * Each row should contain the first name of the student and the location.
 */

export const renderTable = (studentsList: Array<Student>): void => {
  // Create table tags
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // Insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }
  
  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
