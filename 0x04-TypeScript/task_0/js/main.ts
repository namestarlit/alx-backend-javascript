/* write an interface */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/* Create two students */
const student1: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 21,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'Rongai'
};

/* Create an array named studentsList */
const studentsList: Student[] = [student1, student2];

/* Create a table */
const table = document.createElement('table');

/* For each student in the array, append a new row to the table */
studentsList.forEach((student: Student): void => {
 const row = document.createElement('tr');
 const firstNameCell = document.createElement('td');
 const locationCell = document.createElement('td');

 firstNameCell.textContent = student.firstName;
 locationCell.textContent = student.location;

 firstNameCell.style.border = "1px solid";
 locationCell.style.border = "1px solid";
 firstNameCell.style.padding = "5px";
 locationCell.style.padding = "5px";

 row.appendChild(firstNameCell);
 row.appendChild(locationCell);
 table.appendChild(row);
});

/* Append the table to the body of the document */
document.body.appendChild(table);
