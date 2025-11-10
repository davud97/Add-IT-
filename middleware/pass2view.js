const pass2view = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null;
  next();
}

module.exports = pass2view;
