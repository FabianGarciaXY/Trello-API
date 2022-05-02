# Trello-API
*Practica como parte del programa LaunchX*

Se creó un proyecto con configuración externalizada

### Para ello se usaron las siguientes dependencias:
* dotenv
* trello

### Proceso
* Se uso la API rest de Trello para poder crear una nueva card usando la API Key y Token para lo cual Se creo previamente para poder usar la API.
* Se creo un archivo .env para guardar las variables de entorno(KEY, y TOKEN).
* Se uso la dependencia de Trello para crear una nueva card.

```JS
require('dotenv').config();

if (!process.env.TOKEN && !process.env.KEY) {
  throw new Error('No hay configuración con API Key y Token');
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(cardTitle, "My Card Description", "62704a8959513806c62c0fbe", 
  function(error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added Card', trelloCard);
    }
  });
```

### Elemento creado
![Screenshot](https://user-images.githubusercontent.com/83149636/166342899-993a2d66-b0ff-47aa-859f-9cc898630630.png)
