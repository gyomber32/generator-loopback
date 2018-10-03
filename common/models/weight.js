
module.exports = function(Weight) {

/**
 * addWeight
 * @param {string} weight The weight measurement value of the database.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Weight.addWeight = function(weight, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getWeight
 * @param {string} weight The weight in the database. Values are given by using the value (e.g.: 74 or 86).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Weight} result Result object
 */
Weight.getWeight = function(weight, callback) {
  var postgres = Weight.app.dataSources.postgres.connector;
  if (weight != undefined) {
    var sql = 'SELECT valuenum FROM result WHERE (valuenum BETWEEN $1 AND ($1 + 9)) AND itemid = $2 LIMIT 1;';
    var unit = '226512';
    var params = [weight, unit];
    postgres.execute(sql, params, function(data, error){
      callback(data,error);
    });
  }
  if (weight == undefined) {
    var sql = 'SELECT valuenum FROM result WHERE itemid = 226512 LIMIT 1;';
    postgres.execute(sql, null, function(data, error){
      callback(data,error);
    });
  }
}




Weight.remoteMethod('addWeight',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'weight',
       type: 'number',
       description: 'The weight measurement value of the database.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '' },
  description: undefined }
);

Weight.remoteMethod('getWeight',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'weight',
       type: 'number',
       description:
        'The weight in the database. Values are given by using the value (e.g.: 74 or 86).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK', type: [ 'Weight' ], arg: 'data', root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
