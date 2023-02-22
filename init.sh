#!/bin/bash

# Verifica se o arquivo .env já existe
if [ ! -f .env ]; then
  # Se o arquivo .env não existe, copia o arquivo .env.example
  cp .env.example .env
fi

# Instala as dependências do aplicativo
npm install

# Executa o comando docker-compose build
docker-compose build

# Executa o comando docker-compose up
docker-compose up
