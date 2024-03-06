const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const JSController = require('../Controllers/JSController');

router.get('/', UserController.renderUser);
router.get('/user', UserController.renderUserDetails);
router.get('/add', UserController.renderAddDetails);
router.post('/add', UserController.handleAddDetails);
router.post('/edit', UserController.handleEditUser);
router.get('/edit/:id', UserController.renderEdit);
router.get('/delete/:id', UserController.deleteUser);
router.get('/js', JSController.JavaScript);


module.exports = router;