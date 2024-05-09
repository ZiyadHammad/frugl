import jwt from 'jsonwebtoken'

const genToken = (res, userId) => {
  // jwt Args: identifier{}, secret'', options{}
  // assigning user._id to jwt as indetifier, secret => .env file, expires in 30 days
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })

  // Saving token to cookies
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // only secure in production
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in seconds
  })
}

export default genToken