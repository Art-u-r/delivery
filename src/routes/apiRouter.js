import express from 'express';
import { Order } from '../../db/models';

const router = express.Router();

router.patch('/editState', async (req, res) => {
  const { id } = req.body;
  try {
    const targetOrder = await Order.findByPk(id);
    if (targetOrder) {
      targetOrder.isActive = true;
      await targetOrder.save();
    }
    return res.status(200).json(targetOrder);
  } catch (error) {
    return res.status(500).json({ message: 'Что-то не так' });
  }
});

export default router;
