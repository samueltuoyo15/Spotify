export function isAuthenticated(req, res, next) {
  if (req.session && req.session.isAuthenticated) {
    next()
  } else {
    res.redirect('/')
  }
}
