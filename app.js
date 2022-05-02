require('dotenv').config();

if (!process.env.TOKEN && !process.env.KEY) {
  trow new Error('No hay configuración con API Key y Token');
}


