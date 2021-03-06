
module.exports = function (LeftUpperLung) {

  /**
   * addLul
   * @param {string} lul The lul measurement value of the database.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  LeftUpperLung.addLul = function (lul, callback) {

    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function () {
      var err = new Error('Not implemented');
      callback(err);
    });

  }


  /**
   * getLul
   * @param {string} lul The lul in the database. Values are given by using the value types: Diminished, Clear, Coarse, etc.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {LeftUpperLung} result Result object
   */
  LeftUpperLung.getLul = function (lul, quantity, callback) {
    var postgres = LeftUpperLung.app.dataSources.postgres.connector;
    if (lul != undefined) {
      var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT $3;';
      var unit = '428';
      var params = [lul, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (lul == undefined) {
      var params = [quantity];
      var sql = 'SELECT value FROM result WHERE itemid = 428 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  LeftUpperLung.remoteMethod('addLul',
    {
      isStatic: true,
      consumes: ['application/json'],
      accepts:
        [{
          arg: 'lul',
          type: 'string',
          description: 'The lul measurement value of the database.',
          required: false,
          http: { source: 'query' }
        }],
      returns: [],
      http: { verb: 'post', path: '/LUL' },
      description: undefined
    }
  );

  LeftUpperLung.remoteMethod('getLul',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'lul',
          type: 'string',
          description:
            'The lul in the database. Values are given by using the value types: Diminished, Clear, Coarse, etc.',
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
          type: ['LeftUpperLung'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '/LUL' },
      description: undefined
    }
  );

}
