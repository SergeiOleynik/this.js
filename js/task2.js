/*
Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
швидкість.

Створіть ще один обʼєкт `location`, який містить властивість `city` та
`distance`

Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
на екран у форматі
`Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
доїде до міста `city` та виводити в консоль повідомлення в форматі
`Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
доступу до властивостей об'єкту.
*/ 


 
 const car = {
     make: "BMW",
     model: "X6",
     year: "2019",
     speed: 0,
     info(){
       return `
        автомобіль, марка якого ${this.make}, 
        модель якого ${this.model}, 
        з роком випуску: ${this.year}`;
             
     },    
     drive(value){
       this.speed = value; 
       return ` автомобіль Їде зі швидкістю ${this.speed} км/год`; 
     }
 }; 

 const location = {
    city: "Київ",
    distance: 264,
};

 let dataCar = car.info();
 console.log(dataCar);

 dataCar = car.drive(120);
 console.log(dataCar);
 
 function showTime(){
    let time = location.distance / car.speed;
    return `автомобіль прибуде до города ${location.city} за ${time} год, 
     при умові швидкості ${car.speed} км/год`; 
 }
 
 dataCar = showTime();
 console.log(dataCar);
