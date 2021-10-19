import express from 'express';
import { router as dataRouter } from './routes/dataRouter';
const PORT = process.env.PORT || 6001;

const app = express();
app.use('/', dataRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
