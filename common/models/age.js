
module.exports = function (Age) {

  /**
   * getAge
   * @param {string} age The age of the database. Values are given by using the dob (e.g.: 1995-03-12), but the user just need to type in the age as a number.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {Age} result Result object
   */
  Age.getAge = function (age, quantity, callback) {
    var postgres = Age.app.dataSources.postgres.connector;
    if (age != undefined) {
      var date = new Date();
      var year = ((date.toString()).split(" ")[3]);
      var dob = parseInt(year) + parseInt(age) + 1;
      dobMin = '\'' + (dob-1) + '-01-01 00:00:00\'';
      dobMax = '\'' + dob + '-12-31 00:00:00\'';
      //console.log(dob);
      var sql = 'SELECT EXTRACT (year FROM age(dob)) * (-1) AS age FROM patients WHERE dob BETWEEN $1 AND $2 LIMIT $3;';
      var params = [dobMin, dobMax, quantity];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (age == undefined) {
      dobMin = '\'2020-01-01 00:00:00\'';
      dobMax = '\'2119-12-31 00:00:00\'';
      var params = [dobMin, dobMax, quantity];
      var sql = 'SELECT EXTRACT (year FROM age(dob)) * (-1) AS age FROM patients WHERE dob BETWEEN $1 AND $2 LIMIT $3;';
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
  }

  Age.remoteMethod('getAge',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'age',
          type: 'string',
          description:
            'The age of the database. Values are given by using the dob (e.g.: 1995-03-12), but the user just need to type in the age as a number.',
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
        [{ description: 'OK', type: ['Age'], arg: 'data', root: true }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
