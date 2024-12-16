import express from 'express';
const router = express.Router();
import TodoController from '../controller/TodoController'


router.get('/gettodo', TodoController.getList);
router.post('/createtodo', TodoController.createList)
router.put('/updatetodo', TodoController.updateList)
router.delete('/deletetodo', TodoController.deleteTodo)



export default router;