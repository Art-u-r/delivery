import express from 'express';
import { Order } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.findAll();
  const initState = { orders };
  res.render('Layout', initState);
});

router.get('/account', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default router;
