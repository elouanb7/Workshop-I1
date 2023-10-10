module.exports.errorHandler = (err, req, res, next) => {
    console.log("Middleware Error Handling");
    console.log(err)
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    let jsonErr = {
        success: false,
        status: errStatus,
        message: errMsg,
    }
    if (process.env.NODE_ENV === 'development') jsonErr.stack = err.stack
    res.status(errStatus).json(jsonErr)
}
