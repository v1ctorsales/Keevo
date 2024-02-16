# Todo Keevo

## Stack Utilizada:
- Frontend
  - React
- Backend
  - Node
  - Express
  - Sequelize
- Banco
  - PostgresSQL

## Instalação e Inicialização

- Navegue para o diretório e utilize `npm i` para instalar as dependências.
- Crie um banco de dados PostgreSQL com o nome 'todo-keevo' e senha '1234'.
- Inicie o backend, navegando para o diretório raiz e usando o comando `node .\server.js`.
- Inicie o frontend navegando para a pasta /frontend dentro do diretório padrão e utilizando `npm start`.

## Arquitetura utilizada

A aplicação está dividida em 3 camadas principais: o frontend, o backend e o servidor.

### Frontend
- É responsável por apresentar ao usuário uma interface que interage com o banco de dados.
- Há as opções de criar, excluir, mudar o estado e editar (incompleto) uma tarefa.
- Ao iniciar a aplicação, é feito um SELECT ALL da tabela de tarefas, e cada tarefa é mapeada usando o ID como chave única.

### Servidor
- Funciona como um meio de campo, entre o frontend e o backend.
- Conecta no banco de dados para verificar a disponibilidade do serviço.
- Recebe as requisições do frontend e, para cada requisição, redireciona para uma rota pré-definida.

### Backend
- É responsável por receber a instrução que veio do frontend, e depois do servidor, e responder em formato de JSON o que foi feito no banco de dados.
- É mantida aqui a modelagem de dados da única tabela da aplicação.
