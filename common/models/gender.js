
module.exports = function (Gender) {

  /**
   * getGender
   * @param {string} gender The gender of the database. Values are given by using the sex (e.g.: F - female or M - male).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {Gender} result Result object
   */
  Gender.getGender = function (gender, quantity, callback) {
    var postgres = Gender.app.dataSources.postgres.connector;
    //console.log("Gender: " + gender);
    //console.log("Quantity: " + quantity)
    if (gender != undefined) {
      // console.log(params);
      var params = [gender, quantity];
      var sql = 'SELECT gender FROM patients WHERE gender = ' + '$1' + ' LIMIT $2;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    } else {
      var params = [quantity];
      var sql = 'SELECT gender FROM patients LIMIT $1;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  Gender.remoteMethod('getGender',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'gender',
          type: 'string',
          description:
            'The gender of the database. Values are given by using the sex (e.g.: F - female or M - male).',
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
        [{ description: 'OK', type: ['Gender'], arg: 'data', root: true }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
