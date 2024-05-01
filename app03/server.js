const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const cors = require("cors")
const cars = [
  {
    "id": 1,
    "car_name": "Isuzu",
    "car_type": "Rodeo",
    "car_year": 2003,
    "hex_color": "#237701",
    "damaged": true
  },
  {
    "id": 2,
    "car_name": "Honda",
    "car_type": "Prelude",
    "car_year": 1986,
    "hex_color": "#f7f23d",
    "damaged": false
  },
  {
    "id": 3,
    "car_name": "Mercedes",
    "car_type": "Sprinter 2500",
    "car_year": 2012,
    "hex_color": "#721ac8",
    "damaged": false
  },
  {
    "id": 4,
    "car_name": "Acura",
    "car_type": "RSX",
    "car_year": 2004,
    "hex_color": "#dcbeb7",
    "damaged": true
  },
  {
    "id": 5,
    "car_name": "LandRover",
    "car_type": "Range Rover Sport",
    "car_year": 2010,
    "hex_color": "#3e29b2",
    "damaged": false
  }
]
app.use(cors())
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})

app.get("/api", function (req, res) {
  res.json(cars)
})
