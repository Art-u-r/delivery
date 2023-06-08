import express from 'express';

const authRouter = express.Router();

authRouter.get('/join', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

authRouter.get('/login', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  });

export default authRouter;
