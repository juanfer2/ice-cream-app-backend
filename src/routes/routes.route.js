import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello word');
  //res.render('layouts/layout');
});

module.exports = router;