
module.exports = function (DiastolicBloodPressure) {

  /**
   * getDiastolicBloodPressure
   * @param {string} diastolicBloodPressure The diastolic blood pressure in the database. Values are given by using the value (e.g.: 76 or 104).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {DiastolicBloodPressure} result Result object
   */
  DiastolicBloodPressure.getDiastolicBloodPressure = function (diastolicBloodPressure, quantity, callback) {
    var postgres = DiastolicBloodPressure.app.dataSources.postgres.connector;
    if (diastolicBloodPressure != undefined) {
      var sql = 'SELECT valuenum FROM result WHERE (valuenum BETWEEN ($1 - 9) AND ($1 + 9)) AND itemid = $2 LIMIT $3;';
      var unit = '220051';
      var params = [diastolicBloodPressure, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (diastolicBloodPressure == undefined) {
      var params = [quantity];
      var sql = 'SELECT valuenum FROM result WHERE itemid = 220051 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  DiastolicBloodPressure.remoteMethod('getDiastolicBloodPressure',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'diastolicBloodPressure',
          type: 'number',
          description:
            'The diastolic blood pressure in the database. Values are given by using the value (e.g.: 76 or 104).',
          required: false,
          http: { source: 'query' }
        }, {
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
          type: ['DiastolicBloodPressure'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '/diastolic' },
      description: undefined
    }
  );

}
