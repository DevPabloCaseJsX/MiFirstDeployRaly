import { config } from "dotenv";
config()

export const DB_PORTS = process.env.DB_PORTS || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'ayk2Rhwopjesus'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
