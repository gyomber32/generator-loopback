
module.exports = function (BloodOxygen) {

  /**
   * getBloodOxygen
   * @param {string} bloodOxygen The blood oxygen in the database. Values are given by using the value (e.g.: 91 or 97).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {BloodOxygen} result Result object
   */
  BloodOxygen.getBloodOxygen = function (bloodOxygen, quantity, callback) {
    var postgres = BloodOxygen.app.dataSources.postgres.connector;
    if (bloodOxygen != undefined) {
      var sql = 'SELECT valuenum FROM result WHERE valuenum = $1 AND itemid = $2 LIMIT $3;';
      var unit = '220277';
      var params = [bloodOxygen, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (bloodOxygen == undefined) {
      var params = [quantity];
      var sql = 'SELECT valuenum FROM result WHERE itemid = 220277 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  BloodOxygen.remoteMethod('getBloodOxygen',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'bloodOxygen',
          type: 'number',
          description:
            'The blood oxygen in the database. Values are given by using the value (e.g.: 91 or 97).',
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
          type: ['BloodOxygen'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
