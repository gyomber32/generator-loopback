
module.exports = function(TobaccoUse) {

/**
 * getTobaccoUse
 * @param {string} tobaccoUse The tobacco use in the database. Values are given by using the value (3 types: 1. never used, 2. current user, 3. former user).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {TobaccoUse} result Result object
 */
TobaccoUse.getTobaccoUse = function(tobaccoUse, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




TobaccoUse.remoteMethod('getTobaccoUse',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'tobaccoUse',
       type: 'string',
       description:
        'The tobacco use in the database. Values are given by using the value (3 types: 1. never used, 2. current user, 3. former user).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'TobaccoUse' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
