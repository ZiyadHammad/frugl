import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'colors'

import {errorHandler, notFound} from './middleware/errorMiddleware.js'
import {connectDB} from './config/mongoDB.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const port = process.env.PORT || 7000

// MongoDB Connection
connectDB()

// Init express app
const app = express()

// cross origin requests
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // Allow credentials (cookies)
}))

// cookie parser
app.use(cookieParser())

// request body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
  res.status(200).json({message: "Test: It's working"})
})

// Error Middleware
app.use(notFound)
app.use(errorHandler)

// The code snippet below kills the server when => CTRL + C
process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit(0);
});

app.listen(port, () => console.log(`Listen to port: ${port}`.underline.bold))