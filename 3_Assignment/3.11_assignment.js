// Input data
let students = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
        student3: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
        }
      }
    ];
    
    // Function to calculate the average marks for each student
    function calculateAverages(students) {
      return students.map(student => {
        // Get the student name (the first key of the object)
        let studentName = Object.keys(student)[0];
        // Get the marks of the student
        let marks = Object.values(student[studentName]);
        // Calculate the average of the marks
        let average = marks.reduce((acc, mark) => acc + mark, 0) / marks.length;
        
        // Return the updated student object with the average
        return {
          [studentName]: {
            average: average
      }
    };
  });
}

// Get the result
let result = calculateAverages(students);
console.log(result);
