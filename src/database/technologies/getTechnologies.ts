import { pool } from '../index';

export const getTechnologies = async () => {
  const query = `SELECT * from public.technologies`;
  const res = await pool.query(query);
  return res.rows;
}
