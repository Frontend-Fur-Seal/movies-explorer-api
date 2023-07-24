const router = require('express').Router();

const { getUser, upgradeUser } = require('../controllers/users');
const { validationUpgradeUser } = require('../middlewares/celebrateValidation');

router.get('/me', getUser);
router.patch('/me', validationUpgradeUser, upgradeUser);

module.exports = router;
