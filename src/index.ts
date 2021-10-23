import express from 'express';

const start = async () => {
  try {
    (await import('dotenv')).config();
    const { pool } = await import('./database');
    const { router: dataRouter } = await import('./routes/dataRouter');

    const PORT = process.env.PORT || 6000;
    const app = express();
    app.use(express.json());
    app.use('/api/data', dataRouter);
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
