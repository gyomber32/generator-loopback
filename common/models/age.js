
module.exports = function(Age) {

/**
 * getAge
 * @param {string} dob The age of the database. Values are given by using the dob (e.g.: 1995-03-12).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Age} result Result object
 */
Age.getAge = function(dob, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Age.remoteMethod('getAge',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'dob',
       type: 'string',
       description:
        'The age of the database. Values are given by using the dob (e.g.: 1995-03-12).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: [ 'Age' ], arg: 'data', root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
