# NODE API de autenticação JWT com TypeScript e TypeORM

Desenvolvimento de uma API de autenticação JWT usando o TypeScript com TypeORM!

## Depêndencias

```bash
npm install

mongodb
mysql
pg
reflect-metadata
typeorm
```

## Bibliotecas de database adicionadas

```bash
mongodb
mysql
pg
```

## Documentaçõe

```bash
https://typeorm.io/#/
https://www.youtube.com/watch?v=TjAXBLszCb0
```

## Alguns comandos executados

```bash
Criar migration: yarn typeorm migration:create -n CreateUsersTable
Rodar migration: yarn typeorm migration:run

docker-compose exec app yarn typeorm migration:run
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgres_docker
```
