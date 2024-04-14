
// Створіть масив об'єктів студентів, який містить властивості ім'я, вік та рейтинг. 
// Додайте до масиву метод вітатися, який буде повертати рядок з привітанням зі зазначенням імені студента.

// Використовуючи метод map(), створіть новий масив, який містить привітання з кожним студентом з масиву студентів. 
// Використовуючи метод filter(), створіть новий масив, який містить тільки ті об'єкти типу студент, які мають рейтинг
// вище заданого значення.

// Створіть функцію addRating, яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію addRating на кожному
// елементі масиву студентів. Перевірте, що в контексті функції addRating
// значення this вказує на конкретний об'єкт студент. Виведіть новий масив зі
// зміненими рейтингами в консоль.


const students = [
  { studentName: "Taras", studentAge: 20, rating: 10 },
  { studentName: "Ira",   studentAge: 19, rating: 20 },
  { studentName: "Olga",  studentAge: 21, rating: 30 },
  { studentName: "Max",   studentAge: 20, rating: 40 },
  { studentName: "Ivan",  studentAge: 19, rating: 50 }
];

function hello(valName,arr){
  for(const stdName of arr){
    if(valName === stdName.studentName) return `hello ${stdName.studentName}`;
  } 
}

console.log(hello("Olga",students));

const helloStud = students.map((stud)=>{
  return ` hello ${stud.studentName}`;
});

console.log(helloStud);

const raiting = students.filter((stud) => stud.rating>40);
console.log(`найбільший рейтинк має сутент`, raiting);

function changeRating(studentName,rating,arr){
  for(const student of arr){
    if(studentName === student.studentName) student.rating=rating;
  }
}
changeRating("Taras",34,students);
changeRating("Ira",44,students);
changeRating("Olga",54,students);
changeRating("Max",64,students);
changeRating("Ivan",74,students);
console.log(students);


