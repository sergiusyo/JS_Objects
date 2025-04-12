const myCity = {
  city: "NewYork",
  popular: true,
  country: "USA",
};

delete myCity.country;
console.log(myCity);

const myCity2 = {
  city: "NewYork",
};

myCity2["popular"] = true;
console.log(myCity2);

const countryPropertyName = "country";
myCity[countryPropertyName] = "USA";
console.log(myCity);

/* удаление объекта */
const myFriend = {
  name: "Alex",
  lastName: "Zubov",
  hobby: "motorcycles",
  country: "Russia",
};

delete myFriend["name"];

console.log(myFriend);

const countryName = "Russia";
myFriend[countryName] = "Togliatty";
console.log(myFriend);
