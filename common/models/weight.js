
module.exports = function (Weight) {

  /**
   * getWeight
   * @param {string} weight The weight in the database. Values are given by using the value (e.g.: 74 or 86).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {Weight} result Result object
   */
  Weight.getWeight = function (weight, quantity, callback) {
    var postgres = Weight.app.dataSources.postgres.connector;
    if (weight != undefined) {
      var sql = 'SELECT valuenum FROM result WHERE (valuenum BETWEEN ($1 - 5) AND ($1 + 5)) AND itemid = $2 LIMIT $3;';
      var unit = '226512';
      var params = [weight, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (weight == undefined) {
      var params = [quantity];
      var sql = 'SELECT valuenum FROM result WHERE itemid = 226512 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  Weight.remoteMethod('getWeight',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'weight',
          type: 'number',
          description:
            'The weight in the database. Values are given by using the value (e.g.: 74 or 86).',
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
        [{ description: 'OK', type: ['Weight'], arg: 'data', root: true }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
