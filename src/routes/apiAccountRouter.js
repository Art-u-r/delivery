import express from 'express';
import { Order } from '../../db/models';

const apiAccountRouter = express.Router();

apiAccountRouter.delete('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Order.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default apiAccountRouter;
