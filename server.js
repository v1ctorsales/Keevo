// Importe os módulos necessários
import express from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize';

import rotaCriarTarefa from './backend/CriarTarefa.js';
import rotaObterTodasTarefas from './backend/ObterTodasTarefas.js';
import rotaExcluirTarefa from './backend/ExcluirTarefa.js';
import rotaAtualizarTarefa from './backend/AtualizarTarefa.js'

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('todo-keevo', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza o banco de dados
    await sequelize.sync();
    console.log('Banco de dados sincronizado com sucesso.');

    // Define as rotas do Express
    app.use('/CriarTarefa', rotaCriarTarefa);
    app.use('/ObterTodasTarefas', rotaObterTodasTarefas);
    app.use('/ExcluirTarefa', rotaExcluirTarefa); // Adicione a rota de exclusão de tarefas
    app.use('/AtualizarTarefa', rotaAtualizarTarefa); // Adicione a rota de exclusão de tarefas

    // Inicia o servidor
    app.listen(port, () => {
      console.log(`Servidor está rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

// Chama a função para iniciar o servidor
iniciarServidor();
