import { pool } from "../db.js"

export const ping = async (request, response) => {
    const result = await pool.query('SELECT 1 + 1 AS resultado')
    response.json(result[0])
}