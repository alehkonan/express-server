import 'dotenv/config';
import express from 'express';
import { pool } from './database';
import { router as dataRouter } from './routes/dataRouter';

const PORT = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use('/api/data', dataRouter);

const start = async () => {
  try {
    await pool.connect();
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

start();
