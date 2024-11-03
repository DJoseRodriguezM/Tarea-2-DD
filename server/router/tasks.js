import { Router } from 'express';
import { TasksController } from '../controllers/tasks-controller.js';

const TasksRouter = Router();

// GET todas las tareas
TasksRouter.get('/', TasksController.getTasksAll)

// GET una tarea por id
TasksRouter.get('/:id', TasksController.getTask)

// POST crear una tarea
TasksRouter.post('/', TasksController.createTask)


export default TasksRouter