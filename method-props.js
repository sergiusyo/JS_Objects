let name = '';
let surname = '';

function getFullName() {
  return this.name + ' ' + this.surname;
}

let obj = { name, surname, getFullName };

console.log(obj.getFullName());

obj.WhoAmI = function() {
  console.log(`Меня зовут ${this.name} ${this.surname}`);
}

obj.WhoAmI();

delete obj.getFullName;

//ошибка, свойства уже не существует
console.log(obj.getFullName());

//добавляем функцию другому объекту 2 раза с разными названиями
let otherObj = {
  someMethod: getFullName,
};

otherObj.someOtherMethod = getFullName;

console.log(otherObj.someMethod());
console.log(otherObj.someOtherMethod());

