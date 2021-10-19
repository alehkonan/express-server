import { Router } from 'express';

export const router = Router();

router.get('/words', (req, res) => {
  res.status(200).json({
    message: 'Hello'
  });
});
