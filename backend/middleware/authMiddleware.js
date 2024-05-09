import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'

export const protect = asyncHandler(async(req, res, next) => {
  
  let token 

  // grabbing token from cookies
  token = req.cookies.jwt

  if (token) {
    try {

      // Authenticating token by token & jwt secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // assigning logged in user or the authenticated user to req.user for accessibility
      req.user = await Users.findById(decoded.userId).select('-password')
      
      next()
    } catch (error) {
      res.status(401)
      throw new Error(' Not Authhorized, invalid token')
    }
    
  } else {
    res.status(401)
    throw new Error('Not Authhorized.')
  }
})