
module.exports = function(TobaccoUse) {

/**
 * getTobaccoUse
 * @param {string} tobaccoUse The tobacco use in the database. Values are given by using the value (3 types: 1. never used, 2. current user, 3. former user).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {TobaccoUse} result Result object
 */
TobaccoUse.getTobaccoUse = function(tobaccoUse, callback) {
  var postgres = TobaccoUse.app.dataSources.postgres.connector;
  if (tobaccoUse != undefined) {
    var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 1;';
    var unit = '227687';
    var params = [tobaccoUse, unit];
    postgres.execute(sql, params, function(data, error){
      callback(data,error);
    });
  }
  if (tobaccoUse == undefined) {
    var sql = 'SELECT value FROM result WHERE itemid = 227687 LIMIT 1;';
    postgres.execute(sql, null, function(data, error){
      callback(data,error);
    });
  }
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
