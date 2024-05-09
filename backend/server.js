import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'

import {errorHandler, notFound} from './middleware/errorMiddleware.js'
import {connectDB} from './config/mongoDB.js'
import userRoutes from './routes/userRoutes.js'
import itemRoutes from './routes/itemRoutes.js'
connectDB()
dotenv.config()
const port = process.env.PORT || 7000

const app = express()

app.use(cors())
app.use(express.json())

// Error Middleware
app.use(notFound)
app.use(errorHandler)

// Routes
app.use('/api/users', userRoutes)

// The code snippet below kills the server when => CTRL + C
process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit(0);
});

app.listen(port, () => console.log(`Listen to port: ${port}`.underline.bold))