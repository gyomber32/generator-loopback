
module.exports = function(RightLowerLung) {

/**
 * addRll
 * @param {string} rll The rll measurement value of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
RightLowerLung.addRll = function(rll, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getRll
 * @param {string} rll The rll in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {RightLowerLung} result Result object
 */
RightLowerLung.getRll = function(rll, callback) {
  var postgres = RightLowerLung.app.dataSources.postgres.connector;
  if (rll != undefined) {
    var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
    var unit = '593';
    var params = [rll, unit];
    postgres.execute(sql, params, function(data, error){
      callback(data,error);
    });
  }
  if (rll == undefined) {
    var sql = 'SELECT value FROM result WHERE itemid = 593 LIMIT 2;';
    postgres.execute(sql, null, function(data, error){
      callback(data,error);
    });
  }
}




RightLowerLung.remoteMethod('addRll',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'rll',
       type: 'string',
       description: 'The rll measurement value of the database.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '/RLL' },
  description: undefined }
);

RightLowerLung.remoteMethod('getRll',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'rll',
       type: 'string',
       description:
        'The rll in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'RightLowerLung' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/RLL' },
  description: undefined }
);

}
