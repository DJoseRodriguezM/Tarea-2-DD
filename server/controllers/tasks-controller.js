import tareas from '../DB-json/tareas.json'  with {type: "json"}

export class TasksController {
    static getTasksAll(req, res) {
        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tareas)
    }

    static getTask(req, res) {
        const { id } = req.params
        const tarea = tareas.find(tarea => tarea.id === parseInt(id))

        if (!tarea) {
            res
                .header('Content-Type', 'application/json')
                .status(404)
                .json({
                    message: 'Tarea no encontrada'
                })
            return
        }

        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tarea)
    }  

    static createTask(req, res) {
        const tarea = req.body

        const id = tareas.length + 1
        const nuevaTarea = { id, ...tarea }

        tareas.push(nuevaTarea)

        res
            .header('Content-Type', 'application/json')
            .status(201)
            .json(nuevaTarea)
    }


}