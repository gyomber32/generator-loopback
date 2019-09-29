
module.exports = function (RightLowerLung) {

  /**
   * getRll
   * @param {string} rll The rll in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {RightLowerLung} result Result object
   */
  RightLowerLung.getRll = function (rll, quantity, callback) {
    var postgres = RightLowerLung.app.dataSources.postgres.connector;
    if (rll != undefined) {
      var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT $3;';
      var unit = '593';
      var params = [rll, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (rll == undefined) {
      var params = [quantity];
      var sql = 'SELECT value FROM result WHERE itemid = 593 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  RightLowerLung.remoteMethod('getRll',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'rll',
          type: 'string',
          description:
            'The rll in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).',
          required: false,
          http: { source: 'query' }
        },
        {
          arg: 'quantity',
          type: 'number',
          description:
            'Quantity the user wants to generate.',
          required: true,
          http: { source: 'query' }
        }],
      returns:
        [{
          description: 'OK',
          type: ['RightLowerLung'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '/RLL' },
      description: undefined
    }
  );

}
