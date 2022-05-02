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
