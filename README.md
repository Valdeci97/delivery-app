# <div align="center">Delivery-app</div>

## <div align="center">Aplicação full-stack e-commerce de bebidas</div>

Último projeto em grupo e também do módulo de backend do curso [Trybe](https://www.betrybe.com/).

Esse projeto consiste em uma simulação de delivery para bebidas, podendo cadastrar novas pessoas clientes ou vendedoras, tendo também um administrador para gerenciar pessoas já existentes.

Aplicação React [Aqui](https://app--delivery-client--cwcj6y6yvsp6.code.run)

Aplicação Node.js API doc [Aqui](https://app--delivery-api--cwcj6y6yvsp6.code.run/api/docs/)
##

## <div align="center">Tecnologias</div>

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60px" title="Javascript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60px" title="Node.JS" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="60px" title="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="60px" title="Jest" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" width="60px" title="Mocha" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" width="60px" title="Sequelize - ORM" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="60px" title="Docker" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="60px" title="MySQL" />
</div>

##

### <div align="center">Como Usar</div>

Você vai precisar ter instalado em sua máquina [Git](https://git-scm.com/downloads) e [Docker](https://docs.docker.com/get-docker/).

Abra um terminal e clone o repositório
```
git clone git@github.com:Valdeci97/delivery-app.git
```
Entre na pasta do projeto

```
cd delivery-app
```

Inicie o container docker - Isso pode demorar um pouco...

```
docker compose up -d
```

Se nada de errado aconteceu você terá três containeres rodando localmente em sua máquina.
- Aplicação web React na porta 3000;
- API REST na porta 3001;
- Banco de dados MySQL na porta 3306.

*Rodando Testes*

- Frontend
  <details close>
  
    Entre no container docker
  
    ```
    docker exec -it delivery_app_frontend bash
    ```
  
    Use o script de testes
  
    ```
    npm test
    ```
  </details>
  

- Backend
  <details close>
  
    Entre no container docker
  
    ```
    docker exec -it delivery_app_api bash
    ```
    Use o script de testes
  
    ```
    npm test
    ```
  </details>
  
  
*Parando os containeres*
  
```
docker compose down -v
```
  
 
