import express from 'express';
import cors from 'cors';
import rotaCriarTarefa from './backend/CriarTarefa.js';
import { Sequelize } from 'sequelize';


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('todo-keevo', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

await sequelize.sync();

console.log('Banco de dados sincronizado com sucesso.');


// Roteadores para diferentes partes do backend
app.use('/CriarTarefa', rotaCriarTarefa);

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
