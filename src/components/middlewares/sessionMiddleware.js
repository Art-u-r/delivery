export const userInsession = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  next();
};

export const authCheck = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/error');
  }
  next();
};
