import { DB_HOST, DB_PORT } from "$env/static/private";

export function connect() {
  console.log(`Connect to database : ${DB_HOST}:${DB_PORT}`);
}