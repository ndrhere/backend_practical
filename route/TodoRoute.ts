import express from 'express';
const router = express.Router();
const TodoController = require('../controller/TodoController');


router.get('/gettodo', TodoController.getList);
router.post('/createtodo', TodoController.createList)
router.put('/updatetodo', TodoController.updateList)
router.delete('/deletetodo', TodoController.deleteTodo)



module.exports = router;