const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Integración continua funcionando");
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en: http://localhost:${PORT}`);
});