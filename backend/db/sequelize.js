import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: '1234',
  database: 'todo-keevo',
  host: 'localhost',
});

export default sequelize;
