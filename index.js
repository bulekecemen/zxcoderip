const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = [
    "172.104.164.130:8080",
    "172.104.164.130:8085",
    "74.207.226.62:8085",
    "103.3.62.12:8080",
    "146.190.83.88:8080",
    "74.207.226.62:8080",
    "143.42.71.199:8080",
    "45.79.208.13:8085",
    "45.79.208.13:8080",
    "173.230.137.62:8085",
    "139.162.29.7:8085",
    "170.187.202.107:8085",
    "170.187.202.107:8080",
    "139.162.56.249:8085",
    "139.162.42.90:8085",
    "139.162.58.126:1930",
    "172.104.45.149:8085",
    "172.104.45.149:8080",
    "139.162.50.114:8080",
    "139.162.42.90:8080",
    "172.105.117.109:8080",
    "159.223.87.242:8080",
    "139.162.42.99:8085",
    "192.46.232.127:8080",
    "172.104.62.116:8085",
    "139.177.185.205:8080",
    "192.53.113.53:8085",
    "40.82.212.5:8080",
    "203.194.114.63:8080",
    "206.189.33.14:8080",
    "146.190.83.88:8080",
    "139.177.190.38:8085",
    "146.190.107.164:8080",
    "146.190.107.164:8085",
    "139.144.118.46:8080",
    "20.249.220.73:8085",
    "139.162.19.58:8085",
    "204.12.253.76:8085",
    "38.54.16.166:8080",
    "172.104.39.126:8080",
    "172.104.184.29:8080",
    "172.104.184.29:8085",
    "98.70.13.23:8080",
    "98.70.13.23:8085",
    "172.104.36.189:8080",
    "170.187.226.175:8080",
    "192.46.228.168:8085",
    "139.162.62.78:8080",
    "172.105.122.71:8080",
    "139.162.19.77:8080",
    "34.105.60.193:8085",
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
