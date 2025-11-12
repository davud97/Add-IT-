const router = require("express").Router()

const advertisementCtrl = require("../controllers/advertisements")

router.get("/",advertisementCtrl.advertisement_index_get);
router.post("/",advertisementCtrl.advertisement_create_post);
router.get("/new",advertisementCtrl.advertisement_create_get);
router.get("/:advertisementId/edit",advertisementCtrl.advertisement_edit_get);
router.put("/:advertisementId",advertisementCtrl.advertisement_update_put);
router.delete("/:advertisementId",advertisementCtrl.advertisement_delete_delete);

module.exports = router
