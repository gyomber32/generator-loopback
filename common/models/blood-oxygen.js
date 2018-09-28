
module.exports = function(BloodOxygen) {

/**
 * addBloodOxygen
 * @param {string} bloodOxygen The blood oxygen measurement value of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
BloodOxygen.addBloodOxygen = function(bloodOxygen, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getBloodOxygen
 * @param {string} bloodOxygen The blood oxygen in the database. Values are given by using the value (e.g.: 91 or 97).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {BloodOxygen} result Result object
 */
BloodOxygen.getBloodOxygen = function(bloodOxygen, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




BloodOxygen.remoteMethod('addBloodOxygen',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'bloodOxygen',
       type: 'string',
       description: 'The blood oxygen measurement value of the database.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '' },
  description: undefined }
);

BloodOxygen.remoteMethod('getBloodOxygen',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'bloodOxygen',
       type: 'string',
       description:
        'The blood oxygen in the database. Values are given by using the value (e.g.: 91 or 97).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'BloodOxygen' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
