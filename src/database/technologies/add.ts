import { pool } from '../index';

export const addTechnology = async (name: string) => {
  const query = `INSERT INTO public.technologies (name) VALUES ($1)`;
  const res = await pool.query(query, [name]);
  return res.rows[0];
}
