const { router } = require('../utils/config');

const { getUser, upgradeUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', upgradeUser);

module.exports = router;
