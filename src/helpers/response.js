function response(res, status, isSuccess, message, data = {}) {
    const results = {};
  
    results.success = isSuccess;
    results.message = message;
    results.result = data;
  
    return res.status(status).json(results);
}
  
module.exports = response;
  