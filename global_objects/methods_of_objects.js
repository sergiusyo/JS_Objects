const myCity = {
  city: "New York",
  cityGreeting: function () {
    console.log("Greetings!!!");
  },
};

myCity.cityGreeting();

const myName = {
  lastName: "Sergius",
  propertyOfName: function () {
    console.log("hi!!");
  },
};
myName.propertyOfName();

const myCity2 = {
  city: "New York",
  cityGreeting() {
    console.log("Greetings!!!");
  },
};

myCity.cityGreeting();
