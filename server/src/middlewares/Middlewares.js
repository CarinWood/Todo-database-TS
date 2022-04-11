import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config()

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

const apply = (app) => {
    app.use(helmet())
    app.use(cors(options))
    app.use(express.json())
    app.use(morgan('common'))  
}

const notFound = (req, res, next) => {
    const error = new Error (`Not found: ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    const statuscode = res.statuscode === 200 ? 500 : res.statusCode
    res.status(statuscode)
    res.json({
        statuscode: statuscode,
        message: error.message,
        stacktrace: process.env.ENVIRONMENT === 'PRODUCTION' ? 'not showing':  error.stack,
    })
}


export default {
    apply,
    notFound,
    errorHandler
}