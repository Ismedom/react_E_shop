const express = require("express"); 
const app = express(); 

app.get("/", (req, res) => {
  // init route
  res.send("Hello Express with Node");
});

app.get("/api/category", (req, res) => {
  const list = [
    {
      id: 1,
      name: "Computer",
    },
    {
      id: 1,
      name: "LED",
    },
  ];
  res.send(list);
});

const PORT = 8081;
app.listen(PORT, () => {
  // listen
  console.log("http://localhost:" + PORT);
});
