import express from 'express';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/join', (req, res) => {
  const request = req.body;
  if (typeof request.confirmation !== 'undefined') {
    const { name, email, password } = req.body;
  }
  res.json({ hello: 'world' });
});

export default apiAuthRouter;
