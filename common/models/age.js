
module.exports = function(Age) {

/**
 * getAge
 * @param {string} age The age of the database. Values are given by using the dob (e.g.: 1995-03-12), but the user just need to type in the age as a number.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Age} result Result object
 */
Age.getAge = function(age, callback) {

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
   [ { arg: 'age',
       type: 'string',
       description:
        'The age of the database. Values are given by using the dob (e.g.: 1995-03-12), but the user just need to type in the age as a number.',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: [ 'Age' ], arg: 'data', root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
