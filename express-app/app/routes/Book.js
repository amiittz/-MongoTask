const controller = require('../controllers/Book');
const router = require('express').Router();
const cacheNoStore = require('../middlewares/cacheNoStore')

router.get('', cacheNoStore, controller.listBooks);
router.post('/add',cacheNoStore, controller.addBook);


module.exports = router;