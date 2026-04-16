// Por Saul Alexander Che Caamal
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;
        res.render('index', {
            quote: quote,
            character: character,
        });
        console.log(result.data);

        
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }
                res.render('index', {
            
            quote: 'No se obtuvo la cita',
            character: 'No hay datos',
        });
        console.log(result.data);
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
