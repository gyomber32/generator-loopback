
module.exports = function (Age) {

  /**
   * getAge
   * @param {string} dob The age of the database. Values are given by using the dob (e.g.: 1995-03-12).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {Age} result Result object
   */
  Age.getAge = function (dob, callback) {

    var postgres = Age.app.dataSources.postgres.connector;
    if (dob != undefined) {
      var sql = 'SELECT dob FROM patients WHERE dob = ' + '$1' + ' LIMIT 1;';
      var params = [dob];
      postgres.execute(sql, params, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(result);
        }
      });
    } else {
      var sql = 'SELECT dob FROM patients LIMIT 1;';
      postgres.execute(sql, null, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(result);
        }
      });
    }
  }

  Age.remoteMethod('getAge',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'dob',
          type: 'string',
          description:
            'The age of the database. Values are given by using the dob (e.g.: 1995-03-12).',
          required: false,
          http: { source: 'query' }
        }],
      returns:
        [{ description: 'OK', type: ['Age'], arg: 'data', root: true }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
