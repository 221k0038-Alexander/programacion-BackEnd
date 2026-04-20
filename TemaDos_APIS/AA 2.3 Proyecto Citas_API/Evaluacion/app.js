// Saul Alexander Che Caamal 

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.jikan.moe/v4/random/anime');

        const title = result.data.data.title;
        const synopsis = result.data.data.synopsis;
        const image = result.data.data.images.jpg.image_url;

        res.render('index', {
            title,
            synopsis,
            image
        });

    } catch (error) {
        console.log(error.message);

        res.render('index', {
            title: "Error",
            synopsis: "No se pudo cargar",
            image: null
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});