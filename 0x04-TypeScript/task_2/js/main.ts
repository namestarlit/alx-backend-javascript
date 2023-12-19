/* Director interface */
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

/* Teacher interface */
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
	workFromHome = (): string => 'Cannot work from home';
	getCoffeeBreak = (): string => 'Cannot have a break';
	workTeacherTasks = (): string => 'Getting to work';
}

const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director()

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));

/* Functions specific to employees */
function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) return employee.workDirectorTasks();
  else if (employee instanceof Teacher) return employee.workTeacherTasks();
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));

/* String literal types */
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return `Teaching Math`;
  else if (todayClass === 'History') return `Teaching History`;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
