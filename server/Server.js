import express from 'express'
import Configuration from './configuration/Configuration.js'
import middlewares from './src/middlewares/Middlewares.js'
import TodoRoutes from './src/routes/Todo.routes.js'

const app = express()

middlewares.apply(app)

TodoRoutes.routes(app)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)


Configuration.connectToDatabase()
Configuration.connectToPort(app)


export default app