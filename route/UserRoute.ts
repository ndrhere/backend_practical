import express from 'express';
const router = express.Router();
const UserController = require('../controller/UserController');


router.post('/register', UserController.register);
router.post('/login', UserController.login)