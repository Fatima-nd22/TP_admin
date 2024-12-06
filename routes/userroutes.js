const express = require('express');
const { updateUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.put('/update/:id', updateUser);
router.get('/:id', getUser);

module.exports = router;
