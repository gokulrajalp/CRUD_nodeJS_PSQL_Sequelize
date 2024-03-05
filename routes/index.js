const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController')

router.get('/', UserController.renderUser);
router.get('/user', UserController.renderUserDetails);
router.get('/add', UserController.renderAddDetails);
router.post('/add', UserController.handleAddDetails);
router.post('/edit', UserController.handleEditUser);
router.get('/edit/:id', UserController.renderEdit);
router.get('/delete/:id', UserController.deleteUser);


module.exports = router;