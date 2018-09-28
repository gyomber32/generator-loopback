
module.exports = function(Height) {

/**
 * addHeight
 * @param {string} height The height measurement value of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Height.addHeight = function(height, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getHeight
 * @param {string} height The height in the the database. Values are given by using the value (e.g.: 178 or 184).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Height} result Result object
 */
Height.getHeight = function(height, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Height.remoteMethod('addHeight',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'height',
       type: 'string',
       description: 'The height measurement value of the database.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '' },
  description: undefined }
);

Height.remoteMethod('getHeight',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'height',
       type: 'string',
       description:
        'The height in the the database. Values are given by using the value (e.g.: 178 or 184).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: [ 'Height' ], arg: 'data', root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
