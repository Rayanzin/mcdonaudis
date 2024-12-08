const express = require("express")
const app = express()

const cupomRoutes = require('./src/routes/cupomRoutes')
const usuarioRoutes = require('./src/routes/usuarioRoutes')

app.use(express.json())

app.get("/", (req, res) =>{
    res.send("olá mundo")
})

app.use("/usuarios", usuarioRoutes)
app.use("/cupons", cupomRoutes)

app.all("*", (req, red) =>{
    res.status(404).send("Rota não encontrada!")
})

app.listen(8000, () =>{
    console.log(`servidor de pé: http://localhost:8000`);
})