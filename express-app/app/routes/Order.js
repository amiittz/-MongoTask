const controller = require('../controllers/Order');
const router = require('express').Router();
const cacheNoStore = require('../middlewares/cacheNoStore')

router.get('', cacheNoStore, controller.listOrder);

module.exports = router;