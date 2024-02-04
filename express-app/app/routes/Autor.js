const controller = require('../controllers/Autor');
const router = require('express').Router();
const cacheNoStore = require('../middlewares/cacheNoStore')

router.post('/add',cacheNoStore,controller.addAuthor)
router.get('', cacheNoStore, controller.listAuthors);


module.exports = router;