
module.exports = function (RightUpperLung) {

  /**
   * getRul
   * @param {string} rul The rul in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {RightUpperLung} result Result object
   */
  RightUpperLung.getRul = function (rul, quantity, callback) {
    var postgres = RightUpperLung.app.dataSources.postgres.connector;
    if (rul != undefined) {
      var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT $3;';
      var unit = '599';
      var params = [rul, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (rul == undefined) {
      var params = [quantity];
      var sql = 'SELECT value FROM result WHERE itemid = 599 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }

  }

  RightUpperLung.remoteMethod('getRul',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'rul',
          type: 'string',
          description:
            'The rul in the database. Values are given by using the value (types: Diminished, Clear, Coarse, etc).',
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
          type: ['RightUpperLung'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '/RUL' },
      description: undefined
    }
  );

}
