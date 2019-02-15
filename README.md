# Angular: REST + Spring Boot Web/H2/JPA

Este repositório é fortemente baseado no tutorial _Tour of Heroes_ para
_framework_ Angular - disponível em [angular.io](https://angular.io/tutorial) -
acrescido de um servidor Spring Boot Web/H2/JPA - alteração originalmente
proposta em
[spinardi/angular-tour-of-heroes](https://github.com/spinardi/angular-tour-of-heroes)

Tem-se em vista as seguintes diretivas:

- O cliente deve permitir a criação e visualização de receitas culinárias, além
  de conter uma tela principal com ao menos dois botões:
  - Criar uma receita
  - Visualizar receitas

- A criação de uma receita deve permitir o cadastro de:
  - Nome
  - Porções (quantas pessoas são servidas pela receita)
  - Calorias
  - Ingredientes (uma lista dos ingredientes necessários)
  - Modo de preparo (um texto de como preparar a receita)
- A visualização das receitas deve recuperar as receitas persistidas e
permitir a visualização em detalhes

- O servidor deve seguir o conceito de uma API REST, com um conjunto de
  _endpoints_ (a seguir) e uma base de dados (livre):
  - `POST /receita` (inicializa uma receita) 
  - `POST /receita/{id}/ingredientes` (insere ingredientes em uma receita)
  - `POST /receita/{id}/modopreparo` (insere modo de preparo em uma receita)
  - `GET /receitas` (devolve todas as receitas armazenadas)
  - `GET /receita/{id}` (devolve uma receita específica)

## Pré-requisitos de ambiente

- _Node.js®_ **10.15.1 LTS** [[nodejs.org](https://nodejs.org/)]
  - _npm package manager_
- _Apache Maven_ **3.6.0** [[maven.apache.org](https://maven.apache.org/index.html)]
- JA SE Development Kit **11.0.2** [[oracle.com](https://www.oracle.com/technetwork/java/javase/downloads/index.html)]

Este projeto também é mantido e testado com:

- Git 2.20.1;
- Google Chrome 72.0.3626.96 64 bits;
- Visual Studio Code 1.31.0 
  - Angular Extension Pack 7.1.0;
- Windows NT x64 10.0.17763.

## Operacionalização

- `git clone ...` (para criar uma cópia local)
- `cd angular-tour-of-heroes/angular-client`
- `npm install` (para instalar as dependências do cliente)
- `ng build --prod` (para construir o cliente)
- `cd ../spring-boot-web-h2-jpa-server`
- `mvn clean install` (para instalar as dependências e construir o servidor)
- `mvn spring-boot:run` (para executar o servidor)

Depois de construídos cliente e (em execução) servidor, acesse:
[http://localhost:8080](http://localhost:8080)

## Links e referências

- [angular.io](https://angular.io/tutorial)
- [edermfl.wordpress.com](https://edermfl.wordpress.com/2017/04/27/aprendendo-spring-5-jparepository/)
- [callicoder.com](https://www.callicoder.com/hibernate-spring-boot-jpa-element-collection-demo/)
- [tutorialspoint.com](https://www.tutorialspoint.com/hibernate/)
- [grokonez.com](https://grokonez.com/frontend/angular/how-to-integrate-angular-6-springboot-2-0-restapi-springtoolsuite)
- [stackabuse.com](https://stackabuse.com/integrating-h2-database-with-spring-boot/)
- [start.spring.io](https://start.spring.io/)
- [kodnito.com](https://www.kodnito.com/posts/spring-boot-with-h2-database/)
