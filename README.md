# DEPPI API

### Contextualização

O sistema está sendo desenvolvido para a disciplina de Programação Web no curso de Sistemas de Informação no IFCE - Campus Cedro, em específico. O seguinte sistema está sendo desenvolvido pela equipe: Anderson, Eduardo, Gideão, Guilherme Oliveira, Ian Thiago.

## Tecnologias

![Node](https://skillicons.dev/icons?i=nodejs&theme=dark) ![TypeScript](https://skillicons.dev/icons?i=typescript&theme=dark) ![TypeScript](https://skillicons.dev/icons?i=prisma&theme=dark) ![TypeScript](https://skillicons.dev/icons?i=express&theme=dark) ![TypeScript](https://skillicons.dev/icons?i=docker&theme=dark) 


## Download do Sistema

Primeiro, clone o repositório:

    git clone https://github.com/Huilerm/PROJETO-FINAL-PWEB.git

Acesse o diretório do projeto:

    cd PROJETO-FINAL-PWEB

Após abrir em alguma IDE, baixe a dependências:

    npm i

Depois configure o .env de acordo com o .env.example.

Concluíndo a configuração do .env, suba o compose docker:

    docker compose up -d

Após o container subir, execute o banco de dados no sistema:

    npx prisma migrate

## Rotas do Sistema

