module.exports = function(req, res, next) {
    res.locals.Auth = req.session.isAuth
    next()
}