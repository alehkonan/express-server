import { Router } from 'express';
import { addTechnology } from '../database/technologies/addTechnology';
import { getTechnologies } from '../database/technologies/getTechnologies';

export const router = Router();

router.get('/technologies', async (req, res) => {
  const technologies = await getTechnologies();
  res.status(200).json(technologies);
});

router.post('/technologies', async (req, res) => {
  const name: string | undefined = req.body.name;
  try {
    if (!name) {
      res.status(400).json();
    } else {
      await addTechnology(name);
      res.status(200).end();
    }
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json(error);
  }
});
