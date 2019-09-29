
module.exports = function (SystolicBloodPressure) {

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
