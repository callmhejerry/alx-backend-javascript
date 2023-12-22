interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName : "Jeremiah",
    lastName : "Chinedu",
    age: 21,
    location: "Ebonyi"
};


const student2: Student  = {
    firstName  : "Jessica",
    lastName : "Obodo",
    age : 24,
    location  : "Enugu"
};

const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
    
    studentsList.forEach(student => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
  
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    },);
  
    document.body.appendChild(table);
