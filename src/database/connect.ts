import { createConnection } from 'typeorm'

//sem parametro ele define pegar as configuração na raiz do projeto no ormconfig.kson
createConnection().then(() => console.log('connected to database'))

//Ou
/*createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kako',
  password: 'kako123456',
  database: 'SolidBase',
  entities: ['src/app/entity/*.ts'],
  migrations: ['src/database/migration/*.ts'],
  cli: {
    migrationsDir: 'src/database/migration',
  },
})*/
