import express from 'express';
import Tarefa from './db/Tarefa.js';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/', async (req, res) => {
  const inputContent = req.body.inputContent;
  const status = "Em Andamento";

  try {
    const novaTarefa = await Tarefa.create({
      nome: inputContent,
      status: status,
    });

    console.log('Tarefa criada:', novaTarefa.toJSON());

    // Após criar a tarefa, faz uma nova solicitação para obter todas as tarefas
    const response = await fetch('http://localhost:3001/ObterTodasTarefas/tarefas');
    const tarefas = await response.json();

    // Envie as tarefas de volta para o frontend
    res.json({
      mensagem: 'Tarefa criada com sucesso!',
      tarefa: novaTarefa.toJSON(),
      tarefas: tarefas, // Envie todas as tarefas atualizadas de volta para o frontend
      status: 'ok',
    });
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error);

    res.status(500).json({
      mensagem: 'Erro ao criar a tarefa',
      status: 'erro',
    });
  }
});

export default router;
