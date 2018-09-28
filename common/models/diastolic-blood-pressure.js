
module.exports = function(DiastolicBloodPressure) {

/**
 * addDiastolicBloodPressure
 * @param {string} diastolicBloodPressure The diastolic blood pressure measurement value of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
DiastolicBloodPressure.addDiastolicBloodPressure = function(diastolicBloodPressure, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getDiastolicBloodPressure
 * @param {string} diastolicBloodPressure The diastolic blood pressure in the database. Values are given by using the value (e.g.: 76 or 104).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {DiastolicBloodPressure} result Result object
 */
DiastolicBloodPressure.getDiastolicBloodPressure = function(diastolicBloodPressure, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




DiastolicBloodPressure.remoteMethod('addDiastolicBloodPressure',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'diastolicBloodPressure',
       type: 'string',
       description:
        'The diastolic blood pressure measurement value of the database.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '/diastolic' },
  description: undefined }
);

DiastolicBloodPressure.remoteMethod('getDiastolicBloodPressure',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'diastolicBloodPressure',
       type: 'string',
       description:
        'The diastolic blood pressure in the database. Values are given by using the value (e.g.: 76 or 104).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'DiastolicBloodPressure' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/diastolic' },
  description: undefined }
);

}
