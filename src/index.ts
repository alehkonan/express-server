import express from 'express';
import { router as dataRouter } from './routes/dataRouter';

const app = express();
app.use('/', dataRouter)

app.listen(5500, () => console.log('Server is running...'));
