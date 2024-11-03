import http from 'node:http'
import express, { json } from 'express'
import TasksRouter from './router/tasks.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(json())
app.use(corsMiddleware())


app.use('/tareas', TasksRouter)

app.use((req, res) => {
    res.status(404).json({
        message: 'URL inexistente'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})