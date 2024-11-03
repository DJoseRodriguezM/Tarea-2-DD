import { Router } from 'express';
import { TasksController } from '../controllers/tasks-controller.js';

const TasksRouter = Router();

// GET todas las tareas
TasksRouter.get('/', TasksController.getTasksAll)

// GET una tarea por id
TasksRouter.get('/:id', TasksController.getTask)

// POST crear una tarea
TasksRouter.post('/', TasksController.createTask)

// PUT actualizar una tarea
TasksRouter.put('/:id', TasksController.updateTask)

// DELETE eliminar una tarea
TasksRouter.delete('/:id', TasksController.deleteTask)


export default TasksRouter