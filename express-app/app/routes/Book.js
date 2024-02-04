const controller = require('../controllers/Book');
const router = require('express').Router();
const cacheNoStore = require('../middlewares/cacheNoStore')

router.get('', cacheNoStore, controller.listBooks);


module.exports = router;