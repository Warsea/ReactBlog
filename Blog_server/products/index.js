const casual = require('casual');
const fromIndex = require('../index');

module.exports = () => {
  casual.define('product', function () {
    const productid = casual.integer((from = 1), (to = 10));
    return {
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
          imageUrl:
            'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: casual.integer((from = 1), (to = 100)),
          productId: productid,
          createdAt: casual.date,
          imageUrl:
            'F:Progamming LearningReact_learningBlog_serverimages83106.jpg',
        },
      ],
    };
  });

  const data = {
    products: [],
  };

  // Create 100 products
  for (let i = 0; i < 10; i++) {
    data.products.push(casual.product);
  }
  return data;
};
