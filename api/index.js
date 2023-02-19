const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// app.use(process);
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors()
  //   cors({
  //     credentials: true,
  //     origin: "http://127.0.0.1:5173",
  //   })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json(name, email, password);
});

app.listen(3000);

// app.listen(3000,()=>{
//     console.log("Server listening on port 3000");
// });

//console.log(process);
