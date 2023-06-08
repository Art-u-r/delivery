import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs/promises';
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

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

apiAccountRouter.post('/order', upload.single('img'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    // console.log('body===, ', req.body);
    // console.log('file===, ', req.file);

    // создаем имя файла с расширением webp и привязкой к дате
    const name = `${Date.now()}.webp`;
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    const path = `./public/img/${name}`;
    await fs.writeFile(path, outputBuffer);
    // создаем пост в бд
    const newOrder = await Order.create({
      name: req.body.name,
      price: req.body.price,
      img: `/img/${name}`,
      destination: req.body.destination,
      discount: req.body.discount,
      courierId: req.session.user.id,
    });
    return res.status(200).json(newOrder);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
  // });
});

export default apiAccountRouter;
