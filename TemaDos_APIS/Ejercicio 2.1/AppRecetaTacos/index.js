// Saul Alexander Che Caamal
import express from 'express'
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware 
app.use(bodyParser.json());
app.use(express.static("public"));


const recetaJSON =`
[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de cochinita pibil",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cochinita",
        "preparacion": "Adobado y horneado en hoja de plátano"
      },
      "salsa": {
        "nombre": "Salsa de habanero",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Naranja agria", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco al pastor",
    "precio": 20.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pastor",
        "preparacion": "Adobado y cocido en trompo"
      },
      "salsa": {
        "nombre": "Salsa roja",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Piña con cebolla",
          "cantidad": "1 porción",
          "ingredientes": ["Piña", "Cebolla", "Cilantro", "Limón"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de asada",
    "precio": 22.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Res",
        "preparacion": "Asada a la parrilla"
      },
      "salsa": {
        "nombre": "Salsa verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Guacamole",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Aguacate", "Limón", "Sal", "Cilantro"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de pollo pibil",
    "precio": 17.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pollo",
        "preparacion": "Adobado y horneado"
      },
      "salsa": {
        "nombre": "Salsa de habanero",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Naranja agria", "Sal"]
        }
      ]
    }
  }
]
`;

// Convertimos JSON a objeto JS
const recetasTacos = JSON.parse(recetaJSON);

// Endpoint para obtener receta por tipo
app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLocaleLowerCase())

  res.json(elegirTaco || {error: "Receta no encontrada"});
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});