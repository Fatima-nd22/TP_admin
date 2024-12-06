const express = require('express');
const { addAdmin, updateAdmin, deleteAdmin, getAdmins } = require('../controllers/adminController');
const router = express.Router();

router.post('/add', addAdmin);
router.put('/update/:id', updateAdmin);
router.delete('/delete/:id', deleteAdmin);
router.get('/list', getAdmins);

module.exports = router;
