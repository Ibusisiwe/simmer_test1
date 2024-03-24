import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'simmerdb',
  password: 'guandaru',
  port: 5432,
});
