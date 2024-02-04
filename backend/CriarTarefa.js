import express from 'express';
const router = express.Router();
import Tarefa from './db/Tarefa.js';


router.post('/', async (req, res) => {
  const inputContent = req.body.inputContent;
  const status = "Em Andamento";

  try {
    const novaTarefa = await Tarefa.create({
      nome: inputContent,
      status: status,
    });

    console.log('Tarefa criada:', novaTarefa.toJSON());

    res.json({
      mensagem: 'Tarefa criada com sucesso!',
      tarefa: novaTarefa.toJSON(),
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
