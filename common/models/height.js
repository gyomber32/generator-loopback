
module.exports = function (Height) {

  /**
   * getHeight
   * @param {string} height The height in the the database. Values are given by using the value (e.g.: 178 or 184).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {Height} result Result object
   */
  Height.getHeight = function (height, quantity, callback) {
    var postgres = Height.app.dataSources.postgres.connector;
    if (height != undefined) {
      var sql = 'SELECT valuenum FROM result WHERE (valuenum BETWEEN ($1 - 5) AND ($1 + 5)) AND itemid = $2 LIMIT $3;';
      var unit = '226730';
      var params = [height, unit, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (height == undefined) {
      var params = [quantity];
      var sql = 'SELECT valuenum FROM result WHERE itemid = 226730 LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  Height.remoteMethod('getHeight',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'height',
          type: 'number',
          description:
            'The height in the the database. Values are given by using the value (e.g.: 178 or 184).',
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
        [{ description: 'OK', type: ['Height'], arg: 'data', root: true }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
