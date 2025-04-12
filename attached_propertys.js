const myCity1 = {
  city: "NewYork",
  info: {
    isPopular: true,
    country: "USA",
  },
};

console.log(myCity.info.isPopular); //первая точка - доступ к info, вторая - к isPopular

delete myCity.info["isPopular"]; //удаление объекта через [] и значение свойства ы строку.

console.log(myCity);

const myCity2 = {
  city: "New York",
  capital: "Washington",
  government: {
    president: "Donald Trump",
    senator: "John Matthews",
  },
  cars: {
    detroit: "jeep",
    model: "shelby",
  },
};

console.log(myCity);
