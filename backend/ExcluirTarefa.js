import express from 'express';
import Tarefa from './db/Tarefa.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
    const tarefaId = req.params.id;
  
    try {
      // Verifica se a tarefa existe
      const tarefa = await Tarefa.findByPk(tarefaId);
      if (!tarefa) {
        return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
      }
  
      // Exclui a tarefa do banco de dados
      await tarefa.destroy();
  
      // Retorna uma resposta de sucesso
      res.json({ mensagem: 'Tarefa excluída com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
      res.status(500).json({ mensagem: 'Erro ao excluir a tarefa' });
    }
  });
  
  export default router;