const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://crypto-scout-lh35.bolt.host/");
    let body = await response.text();

    // Opcional: reemplazar URLs relativas
    body = body.replace(/https:\/\/crypto-scout-lh35\.bolt\.host/g, "");

    res.send(body);
  } catch (err) {
    res.status(500).send("Error al cargar la web");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy corriendo en puerto ${PORT}`);
});
