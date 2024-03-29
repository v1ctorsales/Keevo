import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Tarefa = sequelize.define('Tarefa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'tarefas',
  timestamps: false,
});

export default Tarefa;