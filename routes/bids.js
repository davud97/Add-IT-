const router = require("express").Router();
const bidCtrl = require("../controllers/bids");

//routes
router.get("/mine", bidCtrl.bid_index_all_get);
router.get("/:advertisementId", bidCtrl.bid_index_get);
router.post("/:advertisementId", bidCtrl.bid_create_post);
router.post("/:advertisementId/finalize", bidCtrl.bid_finalize_post);

module.exports = router;
