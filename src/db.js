import { createPool } from 'mysql2/promise'
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_DATABASE } from './confing.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})


