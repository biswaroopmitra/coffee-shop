import { defineConfig, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_SYNC, DATABASE_USERNAME } from "./config/constants";
import { Migrator } from "@mikro-orm/migrations";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { MikroOrmModuleSyncOptions } from "@mikro-orm/nestjs";

export const MIKROORM_CONFIG = {
    extensions: [Migrator],
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/**/*.entity.ts'],
    driver: PostgreSqlDriver,
    dbName: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    logger: (log_message) => console.log(log_message),
    debug: true,
    allowGlobalContext: true,
    metadataProvider: TsMorphMetadataProvider,
    autoLoadEntities: false,
    synchronize: DATABASE_SYNC,
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: 'dist/migrations',
        pathTs: 'migrations',
        snapshot: true
    }
}

// export const MIKROORM_CONFIG = defineConfig(CONFIG);
