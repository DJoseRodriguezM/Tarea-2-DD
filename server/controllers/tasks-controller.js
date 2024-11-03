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

    static updateTask(req, res) {
        const { id } = req.params
        const tarea = req.body

        const index = tareas.findIndex(tarea => tarea.id === parseInt(id))

        if (index === -1) {
            res
                .header('Content-Type', 'application/json')
                .status(404)
                .json({
                    message: 'Tarea no encontrada'
                })
            return
        }

        tareas[index] = { ...tareas[index], ...tarea }

        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tareas[index])
    }

    static deleteTask(req, res) {
        const { id } = req.params

        const index = tareas.findIndex(tarea => tarea.id === parseInt(id))

        if (index === -1) {
            res
                .header('Content-Type', 'application/json')
                .status(404)
                .json({
                    message: 'Tarea no encontrada'
                })
            return
        }

        tareas.splice(index, 1)

        res
            .header('Content-Type', 'application/json')
            .status(204)
            .end()
    }
}