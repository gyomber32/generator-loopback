
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
  var postgres = BloodOxygen.app.dataSources.postgres.connector;
  if (bloodOxygen != undefined) {
    var sql = 'SELECT valuenum FROM result WHERE valuenum = $1 AND itemid = $2 LIMIT 2;';
    var unit = '220277';
    var params = [bloodOxygen, unit];
    postgres.execute(sql, params, function(data, error){
      callback(data,error);
    });
  }
  if (bloodOxygen == undefined) {
    var sql = 'SELECT valuenum FROM result WHERE itemid = 220277 LIMIT 2;';
    postgres.execute(sql, null, function(data, error){
      callback(data,error);
    });
  }
}




BloodOxygen.remoteMethod('addBloodOxygen',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'bloodOxygen',
       type: 'number',
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
       type: 'number',
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
