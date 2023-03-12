import data from "./personnel.json"

const regData = {
  1: {
    name: "John Doe",
    address: "65 Main Street",
    city: "Deleuth",
    state: "AK",
    zip: 25695,
    age: 30,
  },
  2: {
    name: "Jane Dough",
    address: "9087 Church Street",
    city: "Longmont",
    state: "CO",
    zip: 80501,
    age: 22,
  },
  3: {
    name: "Bobby Joe Dean",
    address: "96 First Ave S",
    city: "Clarksville",
    state: "TN",
    zip: 37042,
    age: 68,
  },
};

const jsonData = JSON.stringify(regData);

export {
  jsonData,
  regData,
};