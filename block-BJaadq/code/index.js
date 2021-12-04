// NOTE: You can not use reduce methods to solve this exercise
let got = require("./data");
function log(item){
  console.log(item);
}

log(got)

function countAllPeople() {
  // your code goes here
  let total = 0;
  for(let i=0; i<got.houses.length; i++){
    total += got.houses[i].people.length;
  }
  return total;
}


function peopleByHouses() {
  // your code goes here
  let houses = {};
  for(let i=0; i<got.houses.length; i++){
      houses[got.houses[i].name] = got.houses[i].people.length;
  }
  return houses;
}

function everyone() {
  // your code goes here
  let peopleNames = [];
  for(let i=0; i<got.houses.length - 1; i++){
    for(let j=0; j<got.houses[i].people.length - 1; j++){
      peopleNames.push(got.houses[i].people[j].name)
    }
  }
  log("total people in GOT "+peopleNames.length)
  return peopleNames;
}


function nameEndsWithLetter(str1, str2){
  let peopleNamesWith = [];
  for(let i=0; i<got.houses.length - 1; i++){
    for(let j=0; j<got.houses[i].people.length - 1; j++){
      let condition = got.houses[i].people[j].name.includes((str1)) || got.houses[i].people[j].name.includes((str2));
      condition ? peopleNamesWith.push(got.houses[i].people[j].name) : false;
    }
  }
  console.log(`People whose names ending with ${str1} or ${str2} are ${peopleNamesWith.length}`)
  return peopleNamesWith;
}

function suramesWithLetter(str){
  let surnameWithLetter = [];
  for(let i=0; i<got.houses.length; i++){
    for(let j=0; j<got.houses[i].people.length; j++){
      let condition = got.houses[i].people[j].name.split(" ")[1].startsWith((str));
      condition ? surnameWithLetter.push(got.houses[i].people[j].name) : false;
    }
  }
  console.log(`People whose names ending with ${str} are ${surnameWithLetter.length}`)
  return surnameWithLetter;
}
function nameWithS() {
  // your code goes here
  return nameEndsWithLetter("s", "S");
  
}

function nameWithA() {
  // your code goes here
  return nameEndsWithLetter("a", "A");
}

function surnameWithS() {
  // your code goes here
  return suramesWithLetter("S")
}

function surnameWithA() {
  // your code goes here
  return suramesWithLetter("A")
}

function peopleNameOfAllHouses() {
  // your code goes here
  let houses = {};
  for(let i=0; i<got.houses.length; i++){
      houses[got.houses[i].name] = got.houses[i].people.map(people => people.name);
  }
  return houses;

}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
