import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/join', async (req, res) => {
  const request = req.body;
  if (typeof request.confirmation !== 'undefined') {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.sendStatus(400);
    }
    const findedEmail = await User.findOne({
      where: { email },
    });
    if (findedEmail) {
      return res.sendStatus(406);
    }
    const newUser = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 5),
      isCourier: true,
    });
    req.session.user = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isCourier: newUser.isCourier,
    };
    res.sendStatus(200);
    return;
  }
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.sendStatus(400);
  }
  const findedEmail = await User.findOne({
    where: { email },
  });
  if (findedEmail) {
    return res.sendStatus(406);
  }
  const newUser = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 5),
    isCourier: false,
  });
  req.session.user = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    isCourier: newUser.isCourier,
  };
  res.sendStatus(200);
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendStatus(400);
  }
  const findedUser = await User.findOne({
    where: { email },
  });
  if (findedUser === null) {
    return res.sendStatus(408);
  }
  console.log(await bcrypt.compare(password, findedUser.password));
  if (!(await bcrypt.compare(password, findedUser.password))) {
    return res.sendStatus(409);
  }

  req.session.user = {
    id: findedUser.id,
    name: findedUser.name,
    email: findedUser.email,
    isCourier: findedUser.isCourier,
  };

  res.sendStatus(200);
});

apiAuthRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default apiAuthRouter;
