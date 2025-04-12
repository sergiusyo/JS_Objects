/*Объекты*/

const myCity1 = {
  city: "NewYork",
  popular: true,
  country: "USA",
};

// console.log(myCity);

// /* Доступ к получению свойств объектов */

console.log(myCity.city);
console.log(myCity.popular);

// /* Изменение значения свойств объектов */

// myCity.city = "Chicago";
// console.log(myCity);

/* Добавление новых свойств объектов */

const myCity2 = {
  city: "NewYork",
};

myCity.popular = true;

console.log(myCity);

myCity.country = "USA";

console.log(myCity);

myCity.president = "Trump";

console.log(myCity);

const myCity3 = {
  popular: true,
  country: "USA",
  city: "NewYork",
};

console.log(myCity2);

const myCity = {
  city: "NewYork",
  popular: true,
  country: "USA",
};

const myFriend = {
  name: "Alex",
  lastName: "Zubov",
  hobby: "motorcycles",
};
console.log(myFriend);

myFriend.name;
console.log(myFriend.name);

myFriend.name = "Sergius Potapov";
console.log(myFriend.name);

myFriend.residenceCity = "Togliatty";
console.log(myFriend.residenceCity);

// *** =========================================================== ***

const a = 10;
let b = a;

b = 30;

console.log(a); //10
console.log(b); //30

const person = {
  name: "Bob",
  age: 21,
};

person.age = 22;
person.isAdult = true;

console.log(person.age); //22
console.log(person.isAdult); //true

//мутирование копий
const person = {
  name: "Bob",
  age: 25,
};

const person2 = person;
person2.age = 26;
person2.isAdult = true;

console.log(person.age); //26
console.log(person.isAdult); //true

const person = {
  name: "Bob",
  age: 25,
};

console.log(person2.age); //26
console.log(person.age); //25

const person = {
  name: "Bob",
  age: 25,
};

const person2 = { ...person }; //оператор деления объекта на свойства (spread)

person2.name = "Alice";

console.log(person2.name); //Alice
console.log(person.name); //Bob

const student = {
  firstName: "Марина",
  lastName: "Кравец",
  age: 39,
  faculty: "Филологический",
};

const student2 = { ...student };
student2.firstName = "Стас";
student2.lastName = "Ярушин";
student2.age = 44;
student2.faculty = "hockey";

console.log(student2.firstName);
console.log(student.firstName);

console.log(student2.lastName);
console.log(student.lastName);

console.log(student2.age);
console.log(student.age);

console.log(student2.faculty);
console.log(student.faculty);

const person = {
  name: "Bob",
  age: 25,
};

const person2 = JSON.parse(JSON.stringify(person));
person2.name = "Alice";

console.log(person2.name); //Alice
console.log(person.name); //Bob
