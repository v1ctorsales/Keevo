import express from 'express';
import Tarefa from './db/Tarefa.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
    const tarefaId = req.params.id;
  
    try {
      // Verifica se a tarefa existe
      const tarefa = await Tarefa.findByPk(tarefaId);
      if (!tarefa) {
        return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
      }
  
      // Atualize o status da tarefa
      tarefa.status = tarefa.status === 'Concluída' ? 'Em Progresso' : 'Concluída';
      await tarefa.save();
  
      // Retorna os dados da tarefa atualizada
      res.json(tarefa);
  
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
      res.status(500).json({ mensagem: 'Erro ao atualizar a tarefa' });
    }
  });
  
  
  export default router;
