const express = require("express");
const cors = require("cors");
const control = require("./controller.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/houses", control.getHouses);

app.post("/api/houses", control.createHouse);

app.put("/api/houses/:id", control.updateHouse);

app.delete("/api/houses/:id", control.deleteHouse);

app.listen(4004, () => {
  console.log("Server running on 4004");
});
