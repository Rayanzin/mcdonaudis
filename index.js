const express = require("express")
const app = express()

const cupomRoutes = require('.src/routes/cupomRoutes')

app.get("/", (req, res) =>{
    res.send("olá mundo")
})

app.use("/cupons", cupomRoutes)

app.all("*", (req, red) =>{
    res.status(404).send("Rota não encontrada!")
})

app.listen(8000, () =>{
    console.log(`servidor de pé: http://localhost:8000`);
})