const express = require('express');
const app = express();
const casual = require('casual');
const cors = require('cors');

app.use(cors());

app.get('/products/:id', (req, res) => {
  const productid = parseInt(req.params.id);

  res.json([
    {
      id: productid,
      createdAt: casual.date,
      name: casual.name,
      color: casual.color_name,
      price: casual.integer((from = 1), (to = 500)),
      description: casual.description,
      images: [
        {
          id: casual.integer((from = 1), (to = 100)),
          productId: productid,
          createdAt: casual.date,
          // random image from internet. If it doesn't work, use another image url.
          imageUrl:
            'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          id: casual.integer((from = 1), (to = 100)),
          productId: productid,
          createdAt: casual.date,
          imageUrl:
            'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
      ],
    },
  ]);
});

app.get('/products', (req, res) => {
  const data = require('./products/index');
  const products = data().products;
  res.json(products);
});

const Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`Servers start on port ${Port}`));
