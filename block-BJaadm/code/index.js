let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

function log(item){
  console.log(item)
}
// Create an array peopleName and store value of Name key from persons array
let peopleName = persons.map( person => person.name);
log(peopleName)

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map( person => person.grade);
log(peopleGrade)

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map( person => person.sex);
log(peopleSex)
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
// peopleName.map( people => console.log(people.startsWith("J")|| people.startsWith("P")))
peopleName.forEach(function(people){
  if(people.startsWith("J")|| people.startsWith("P")){
    // log(people)
  }
})
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
log(peopleName.filter(people => (people.startsWith("A") ||people.startsWith("C") ? people : false)).length)
// Log all the filtered male ('M') in persons array
log(peopleSex.filter( people => people === "M"));
// Log all the filtered female ('F') in persons array
log(peopleSex.filter( people => people === "F"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
log(persons.filter(people => (people.name.startsWith("C") ||people.name.startsWith("J") ? people : false))
           .filter(people => people.sex === "F"));

// Log all the even numbers from peopleGrade array
log(peopleGrade.filter(grade => grade %2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
log(persons.filter(person => person.name.startsWith("J")))
// Find the first name that starts with 'P' in persons array and log the object
log(persons.filter(person => person.name.startsWith("P")))

// Find the first name that starts with 'J', grade is greater than 10 and is a female
log(persons.filter(person => (person.name.startsWith("J") &&
                             person.grade > 10 &&
                             person.sex === "F")));

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(person => person.sex === "F");
log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(person => person.sex === "M");
log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, grade) => acc + grade);
log(gradeTotal)

// Find the average grade
let avgGrade = peopleGrade.reduce((acc, grade) => acc + grade) / peopleGrade.length;
log(avgGrade)

// Find the average grade of male
let avgGradeMale = malePersons.reduce((acc, person) => acc + person.grade, 0) / malePersons.length;
log(avgGradeMale)
// Find the average grade of female
let avgGradeFeMale = femalePersons.reduce((acc, person) => acc + person.grade, 0) / femalePersons.length;
log(avgGradeFeMale)
// Find the highest grade
log(peopleGrade.sort((a,b) => a - b).pop());
// Find the highest grade in male
log(persons.filter(person => person.sex === "M").sort((a,b) => a.grade - b.grade).pop().grade);
// Find the highest grade in female
log(persons.filter(person => person.sex === "F").sort((a,b) => a.grade - b.grade).pop().grade);

// Find the highest grade for people whose name starts with 'J' or 'P'
log(persons.filter(people => (people.name.startsWith("P") ||people.name.startsWith("J") ? people : false))
           .sort((a,b) => a.grade - b.grade).pop());

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
log([...peopleGrade].sort((a,b) => a - b))

// Sort the peopleGrade in descending order
log(peopleGrade.sort((a,b) => b - a))

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
log([...peopleGrade].sort((a,b) => b - a))

// Sort the array peopelName in ascending `ABCD..Za....z`
log([...peopleName].sort((a,b) => b - a))
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
log([...peopleName].sort((a,b) => a - b))
