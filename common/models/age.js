
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
      var sql = 'select extract (year from age(dob)) as age from patients WHERE dob = ' + '$1' + ' LIMIT 1;';
      var params = [dob];
      postgres.execute(sql, params, function(data, error){
        callback(data,error);
      });
    } else {
      var sql = 'select extract (year from age(dob)) as age from patients limit 1;';
      postgres.execute(sql, null, function(data, error){
        callback(data,error);
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
