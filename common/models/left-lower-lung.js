
module.exports = function (LeftLowerLung) {

  /**
   * addLll
   * @param {string} lll The lll measurement value of the database.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  LeftLowerLung.addLll = function (lll, callback) {

    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function () {
      var err = new Error('Not implemented');
      callback(err);
    });

  }

  /**
   * getLll
   * @param {string} lll The lll in the database. Values are given by using the value types: Diminished, Clear, Coarse, etc.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {LeftLowerLung} result Result object
   */
  LeftLowerLung.getLll = function (lll, quantity, callback) {
    var postgres = LeftLowerLung.app.dataSources.postgres.connector;
    if (lll != undefined) {
      var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT $3;';
      var unit = '425';
      var params = [lll, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (lll == undefined) {
      var params = [quantity];
      var sql = 'SELECT value FROM result WHERE itemid = 425 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  LeftLowerLung.remoteMethod('addLll',
    {
      isStatic: true,
      consumes: ['application/json'],
      accepts:
        [{
          arg: 'lll',
          type: 'string',
          description: 'The lll measurement value of the database.',
          required: false,
          http: { source: 'query' }
        }],
      returns: [],
      http: { verb: 'post', path: '/LLL' },
      description: undefined
    }
  );

  LeftLowerLung.remoteMethod('getLll',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'lll',
          type: 'string',
          description:
            'The lll in the database. Values are given by using the value types: Diminished, Clear, Coarse, etc.',
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
          type: ['LeftLowerLung'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '/LLL' },
      description: undefined
    }
  );

}
