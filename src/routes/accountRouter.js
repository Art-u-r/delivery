import express from 'express';
import { Order } from '../../db/models';

const orderRouter = express.Router();

orderRouter.get('/', async (req, res) => {
  const orders = await Order.findAll();
  const initState = { orders };
  res.render('Layout', initState);
  console.log('++++', orders);
});

export default orderRouter;
