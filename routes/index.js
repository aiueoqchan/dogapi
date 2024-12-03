const express = require('express');
const axios = require('axios');
const router = express.Router();

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

router.get('/', async (req, res, next) => {
try {
const response = await axios.get(DOG_API_URL);
const imageUrl = response.data.message;

res.render('index', { title: 'ランダムな犬の画像', imageUrl });
  } catch (error) {
console.error(error); // エラー
res.status(500).send('エラーが発生'); // エラー
  }
});

module.exports = router;
