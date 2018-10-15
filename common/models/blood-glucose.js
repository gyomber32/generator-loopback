
module.exports = function (BloodGlucose) {

  /**
   * addBloodGlucose
   * @param {string} bloodGlucose The blood glucose measurement value of the database.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  BloodGlucose.addBloodGlucose = function (bloodGlucose, callback) {

    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function () {
      var err = new Error('Not implemented');
      callback(err);
    });

  }


  /**
   * getBloodGlucose
   * @param {string} bloodGlucose The blood glucose in the database. Values are given by using the value (e.g.: 7.1 or 9.2).
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {BloodGlucose} result Result object
   */
  BloodGlucose.getBloodGlucose = function (bloodGlucose, callback) {
    var postgres = BloodGlucose.app.dataSources.postgres.connector;
    if (bloodGlucose != undefined) {
      var sql = 'SELECT valuenum FROM result WHERE (valuenum BETWEEN $1 AND ($1 + 19)) AND itemid = $2 LIMIT 1;';
      var unit = '1529';
      var params = [bloodGlucose, unit];
      postgres.execute(sql, params, function (data, error) {
        callback(data, error);
      });
    }
    if (bloodGlucose == undefined) {
      var sql = 'SELECT valuenum FROM result WHERE itemid = 1529 LIMIT 1;';
      postgres.execute(sql, null, function (data, error) {
        callback(data, error);
      });
    }
  }




  BloodGlucose.remoteMethod('addBloodGlucose',
    {
      isStatic: true,
      consumes: ['application/json'],
      accepts:
        [{
          arg: 'bloodGlucose',
          type: 'number',
          description: 'The blood glucose measurement value of the database.',
          required: false,
          http: { source: 'query' }
        }],
      returns: [],
      http: { verb: 'post', path: '' },
      description: undefined
    }
  );

  BloodGlucose.remoteMethod('getBloodGlucose',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'bloodGlucose',
          type: 'number',
          description:
            'The blood glucose in the database. Values are given by using the value (e.g.: 7.1 or 9.2).',
          required: false,
          http: { source: 'query' }
        }],
      returns:
        [{
          description: 'OK',
          type: ['BloodGlucose'],
          arg: 'data',
          root: true
        }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
