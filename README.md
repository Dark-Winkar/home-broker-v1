# Home Broker V1

**Aplicação web para consulta de cotações de ações, desenvolvida com JavaScript, Node.js e Express.js.**

Este projeto representa a primeira versão de uma aplicação de acompanhamento do mercado financeiro, desenvolvida como projeto pessoal para praticar desenvolvimento web, criação de APIs REST e integração com fontes externas de dados.

O sistema utiliza a biblioteca `yahoo-finance2` para consultar informações financeiras do Yahoo Finance e disponibilizá-las por meio de um servidor HTTP desenvolvido com Express.js.

**Status:** Versão inicial de desenvolvimento.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| JavaScript | Linguagem utilizada no desenvolvimento |
| Node.js | Execução do JavaScript no backend |
| Express.js | Criação do servidor e das rotas HTTP |
| yahoo-finance2 | Consulta de informações financeiras |
| CORS | Configuração de acesso à API entre origens diferentes |
| npm | Gerenciamento das dependências |

## Funcionalidades

### Consulta de ações

O backend disponibiliza uma rota HTTP para consultar informações de ativos financeiros utilizando seu símbolo de negociação (*ticker*).

A consulta é realizada por meio da biblioteca `yahoo-finance2`, que obtém informações do Yahoo Finance.

### API REST

O projeto possui um endpoint para consulta de ativos:

```http
GET /stock/:ticker
```

Exemplo de requisição:

```http
GET http://localhost:3000/stock/PETR4.SA
```

O backend consulta o ticker informado e retorna os dados disponíveis em formato JSON.

### Informações retornadas

A API foi estruturada para disponibilizar:

| Campo | Descrição |
|---|---|
| `symbol` | Símbolo de negociação do ativo |
| `price` | Preço de mercado |
| `change` | Variação do preço |
| `min` | Menor preço do dia |
| `max` | Maior preço do dia |
| `open` | Preço de abertura |

Exemplo ilustrativo da estrutura da resposta:

```json
{
  "symbol": "PETR4.SA",
  "price": 35.50,
  "change": 0.45,
  "min": 34.90,
  "max": 35.80,
  "open": 35.10
}
```

Os valores apresentados são fictícios e servem apenas para demonstrar a estrutura da resposta.

## Estrutura do projeto

```text
home-broker-v1/
├── public/
├── server.js
├── package.json
├── package-lock.json
└── node_modules/
```

**Principais componentes:**

- `public/`: diretório destinado aos arquivos públicos da aplicação.
- `server.js`: implementação do servidor Express, consulta de ativos e endpoint HTTP.
- `package.json`: configuração do projeto, dependências e scripts.
- `package-lock.json`: registro das versões das dependências instaladas.
- `node_modules/`: dependências locais instaladas pelo npm.

A pasta `node_modules` está presente no repositório atual, mas recomenda-se removê-la do controle de versão e adicioná-la ao `.gitignore`.

## Instalação e execução

### Pré-requisitos

- Node.js instalado.
- npm disponível no sistema.
- Conexão com a internet para consultar os dados financeiros.

### 1. Clonar o repositório

```bash
git clone https://github.com/Dark-Winkar/home-broker-v1.git
```

### 2. Acessar o diretório

```bash
cd home-broker-v1
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor

```bash
npm start
```

O servidor está configurado para utilizar a porta `3000`.

### 5. Testar a API

Com o servidor em execução, acesse:

```text
http://localhost:3000/stock/PETR4.SA
```

A aplicação deverá consultar o ativo e retornar as informações financeiras disponíveis em formato JSON, desde que a consulta seja concluída com sucesso.

## Funcionamento do backend

O backend é responsável por:

1. Inicializar o servidor HTTP utilizando Express.js.
2. Receber requisições de consulta de ativos.
3. Identificar o ticker informado na URL.
4. Consultar os dados por meio da biblioteca `yahoo-finance2`.
5. Selecionar as informações financeiras relevantes.
6. Retornar os resultados em formato JSON.

O projeto também utiliza o middleware `cors`, permitindo configurar o compartilhamento de recursos entre diferentes origens.

## Limitações da versão inicial

Esta versão representa uma etapa de aprendizado e desenvolvimento.

Entre os aspectos que podem ser aprimorados estão:

- Validação dos parâmetros recebidos pela API.
- Tratamento de ativos inexistentes.
- Tratamento de erros de consulta.
- Organização e documentação do código.
- Separação de responsabilidades entre os componentes.
- Remoção de dependências instaladas do controle de versão.

A disponibilidade e a atualização das cotações dependem da fonte externa de dados utilizada.

## Aprendizados

O desenvolvimento desta versão proporcionou experiência prática com:

- Criação de servidores HTTP utilizando Node.js.
- Definição de rotas com Express.js.
- Utilização de bibliotecas externas por meio do npm.
- Integração com dados financeiros externos.
- Manipulação de objetos JavaScript.
- Estruturação de respostas JSON.
- Conceitos básicos de APIs REST.
- Configuração de CORS.

## Evolução do projeto

O Home Broker V1 representa a primeira etapa de um projeto pessoal de desenvolvimento de aplicações financeiras.

Uma versão posterior está sendo desenvolvida separadamente, com foco em uma interface mais completa, visualização gráfica de cotações e persistência de dados.

## Autor

**Daniel Gonzalez**

Estudante de Engenharia de Computação na Universidade Tecnológica Federal do Paraná (UTFPR).

GitHub: [Dark-Winkar](https://github.com/Dark-Winkar)

## Aviso

Este projeto possui finalidade educacional e não constitui uma plataforma profissional de negociação de ativos ou recomendação de investimentos.
