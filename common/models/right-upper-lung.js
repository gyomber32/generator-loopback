
module.exports = function(RightUpperLung) {

/**
 * addRul
 * @param {string} rul The rul measurement value of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
RightUpperLung.addRul = function(rul, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getRul
 * @param {string} rul The rul in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {RightUpperLung} result Result object
 */
RightUpperLung.getRul = function(rul, callback) {
  var postgres = RightUpperLung.app.dataSources.postgres.connector;
  if (rul != undefined) {
    var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
    var unit = '599';
    var params = [rul, unit];
    postgres.execute(sql, params, function(data, error){
      callback(data,error);
    });
  }
  if (rul == undefined) {
    var sql = 'SELECT value FROM result WHERE itemid = 599 LIMIT 2;';
    postgres.execute(sql, null, function(data, error){
      callback(data,error);
    });
  }
  
}




RightUpperLung.remoteMethod('addRul',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'rul',
       type: 'string',
       description: 'The rul measurement value of the database.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '/RUL' },
  description: undefined }
);

RightUpperLung.remoteMethod('getRul',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'rul',
       type: 'string',
       description:
        'The rul in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'RightUpperLung' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/RUL' },
  description: undefined }
);

}
