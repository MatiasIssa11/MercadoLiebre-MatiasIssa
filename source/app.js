const path = require("path");
const express = require("express");
const app = express();

app.listen(1117, () => {
  console.log("Abriendo el servidor http://localhost:1117");
});

app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "views/home.html"));//vinculamos el html con la url
});
app.get("/Contactos",(req,res) => {
  res.send('Contactos del sitio web')
})
const public = path.resolve(__dirname, "../public");
app.use(express.static(public));

