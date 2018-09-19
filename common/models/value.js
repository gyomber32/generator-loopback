
module.exports = function(Value) {

/**
 * addValue
 * @param {string} value The measurement value of the database.
 * @param {string} measurement The measurement id of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Value.addValue = function(value, measurement, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getValue
 * @param {string} value The value of the the database. Values are given by using the value (e.g.: 185 for height or 8.2 for the blood glucose).
 * @param {string} measurement The measurement id of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Value} result Result object
 */
Value.getValue = function(value, measurement, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Value.remoteMethod('addValue',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'value',
       type: 'string',
       description: 'The measurement value of the database.',
       required: false,
       http: { source: 'query' } },
     { arg: 'measurement',
       type: 'string',
       description: 'The measurement id of the database.',
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '' },
  description: undefined }
);

Value.remoteMethod('getValue',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'value',
       type: 'string',
       description:
        'The value of the the database. Values are given by using the value (e.g.: 185 for height or 8.2 for the blood glucose).',
       required: false,
       http: { source: 'query' } },
     { arg: 'measurement',
       type: 'string',
       description: 'The measurement id of the database.',
       required: true,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: [ 'Value' ], arg: 'data', root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
