
module.exports = function (SystolicBloodPressure) {

  /**
   * addSystolicBloodPressure
   * @param {string} systolicBloodPressure The systolic blood pressure measurement value of the database.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  SystolicBloodPressure.addSystolicBloodPressure = function (systolicBloodPressure, callback) {

    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function () {
      var err = new Error('Not implemented');
      callback(err);
    });

  }

  /**
   * getSystolicBloodPressure
   * @param {string} systolicBloodPressure The systolic blood pressure in the database. Values are given by using the value (e.g.: 122 or 156).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {SystolicBloodPressure} result Result object
   */
  SystolicBloodPressure.getSystolicBloodPressure = function (systolicBloodPressure, quantity, callback) {
    var postgres = SystolicBloodPressure.app.dataSources.postgres.connector;
    if (systolicBloodPressure != undefined) {
      var sql = 'SELECT valuenum FROM result WHERE (valuenum BETWEEN ($1 - 9) AND ($1 + 9)) AND itemid = $2 LIMIT $3;';
      var unit = '220050';
      var params = [systolicBloodPressure, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (systolicBloodPressure == undefined) {
      var params = [quantity];
      var sql = 'SELECT valuenum FROM result WHERE itemid = 220050 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  SystolicBloodPressure.remoteMethod('addSystolicBloodPressure',
    {
      isStatic: true,
      consumes: ['application/json'],
      accepts:
        [{
          arg: 'systolicBloodPressure',
          type: 'number',
          description:
            'The systolic blood pressure measurement value of the database.',
          required: false,
          http: { source: 'query' }
        }],
      returns: [],
      http: { verb: 'post', path: '/systolic' },
      description: undefined
    }
  );

  SystolicBloodPressure.remoteMethod('getSystolicBloodPressure',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'systolicBloodPressure',
          type: 'number',
          description:
            'The systolic blood pressure in the database. Values are given by using the value (e.g.: 122 or 156).',
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
          type: ['SystolicBloodPressure'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '/systolic' },
      description: undefined
    }
  );

}
