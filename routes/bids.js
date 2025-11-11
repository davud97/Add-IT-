const router = require('express').Router();

const bidCtrl = require('../controllers/bids');

// Routes/ Call API's
router.get('/', bidCtrl.biding_index_get);
router.get('/new', bidCtrl.biding_create_get);
router.post('/', bidCtrl.biding_create_post);
router.get('/:bidingId', bidCtrl.biding_show_get);

router.get("/:bidingId/edit", bidCtrl.biding_edit_get);
router.put("/:bidingId", bidCtrl.biding_update_put);


module.exports = router;
