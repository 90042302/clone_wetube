import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => { 
  console.log(`${req.method}  ${req.url}`);
  //return res.send("lalala");
  next();
};

const handleHome = (req, res) => {
  return res.send("I Love Middlewares");
};


app.get("/",logger, handleHome);  //use 후 get사용


const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);