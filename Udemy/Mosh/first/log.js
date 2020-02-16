function log(req, req, next)  {
    console.log('logging...');
    next();
}

module.exports = log;