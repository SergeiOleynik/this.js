/*
Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
метод `introduce()`, який повертає рядок зі словами
`Мене звати {ім'я}, мені {вік} років я {стать}`.
Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
`name` на нове ім'я.
Використайте ключове слово `this` для доступу до властивостей об'єкту.*/


const person = {
    firstName: "Jack",
    lastName: "Daniels",
    age: 158,
    typeOfDrink: "Whiskey",

    showInfo(){
       return `
        name: ${this.firstName}  ${this.lastName}
        age: ${this.age},
        type of drink: ${this.typeOfDrink}`; 
    },

    changeName(newName,newlastName,newAge){
        this.firstName = newName;
        this.lastName = newlastName;
        this.age = newAge;
    }
}

let info = person.showInfo();
console.log(info);
console.log("other brand:");

person.changeName("Hankey", "Bannister",170);
info = person.showInfo();
console.log(info);
