module.exports = (req, res, next) => {
  res.header('Content-Range', 'parts 0-20/20')
  next()
}
