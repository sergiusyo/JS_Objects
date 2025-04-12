let name = "Тимофей";
let surname = "Тиунов";
let middle = "Сергеевич";

let me = {
  name,
  surname,
  middleName: middle,
  birthDate: { year: 1991, month: 3, day: 14 },
  occupation: "Системный архитектор",
  married: true,
  "property with spaces": null,
  "property.with.dots": undefined,
};

me.education = "НИУ ВШЭ";
me.occupation = "Безработный";

me["property with spaces"] = 42;
me["property.with.dots"] = 42;

delete me.education;
delete me["property with spaces"];

//получаем значения свойства
let myName = me.name;
let myBirthYear = me.birthDate.year;
let fourtyTwo = emptyObj["property with spaces"];
let emptyProp = emptyObj.someProp;

//пустой объект
let emptyObj = {};
