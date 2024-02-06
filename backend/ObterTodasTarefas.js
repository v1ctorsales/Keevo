import express from 'express';
import Tarefa from './db/Tarefa.js';

const router = express.Router();

router.get('/tarefas', async (req, res) => {
  try {
    // Busque todas as tarefas no banco de dados
    const tarefas = await Tarefa.findAll();

    // Envie as tarefas como resposta
    res.json(tarefas);
  } catch (error) {
    console.error('Erro ao obter as tarefas:', error);
    res.status(500).json({ mensagem: 'Erro ao obter as tarefas' });
  }
});

export default router;
