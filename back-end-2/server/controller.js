const houses = require("./db.json");

let houseId = 4;

module.exports = {
  getHouses: (req, res) => {
    console.log(houses);
    res.status(200).send(houses);
  },

  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    let newHouse = {
      id: houseId,
      address,
      price,
      imageURL,
    };
    houses.push(newHouse);
    res.status(200).send(houses);
    houseId++;
  },

  updateHouse: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;

    let index = houses.findIndex((elem) => elem.id === +id);

    if (houses[index].price < 0 && type === "minus") {
      res.status(400).send("Price is too small");
    } else if (type === "plus") {
      houses[index].price += 10000;
      res.status(200).send(houses);
    } else if (type === "minus") {
      houses[index].price -= 10000;
      res.status(200).send(houses);
    } else {
      res.status(400).send("error");
    }
  },

  deleteHouse: (req, res) => {
    let index = houses.findIndex((elem) => elem.id === +req.params.id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  },
};
