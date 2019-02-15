# Angular: Tour of Heroes + Spring Boot Web/H2/JPA

Este repositório estende o tutorial _Tour of Heroes_ para _framework_ Angular -
disponível em [angular.io](https://angular.io/tutorial) - acrescentando um
servidor Spring Boot Web/H2/JPA para testes de uso e integração.

## Pré-requisitos

- _Node.js®_ **10.15.1 LTS** [[nodejs.org](https://nodejs.org/)]
  - _npm package manager_
- _Apache Maven_ **3.6.0** [[maven.apache.org](https://maven.apache.org/index.html)]
- JA SE Development Kit **11.0.2** [[oracle.com](https://www.oracle.com/technetwork/java/javase/downloads/index.html)]

Este projeto também foi desenvolvido e testado com:

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
