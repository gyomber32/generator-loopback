
module.exports = function (Value) {

  /**
   * addValue
   * @param {string} value The measurement value of the database.
   * @param {string} measurement The measurement id of the database.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  Value.addValue = function (value, measurement, callback) {

    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function () {
      var err = new Error('Not implemented');
      callback(err);
    });

  }


  /**
   * getValue
   * @param {string} value The value of the the database. Values are given by using the value (e.g.: 185 for height or 8.2 for the blood glucose).
   * @param {string} measurement The measurement id of the database.
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {Value} result Result object
   */
  Value.getValue = function (value, measurement, callback) {

    var postgres = Value.app.dataSources.postgres.connector;

    /* Weight query */

    if (measurement == 'Weight') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '226512';
        var params = [value, unit];
        postgres.execute(sql, params, (err, result) => {
          if (err) {
            callback(err);
          } else {
            callback(result);
          }
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 226512 LIMIT 2;';
        postgres.execute(sql, null, (err, result) => {
          if (err) {
            callback(err);
          } else {
            callback(result);
          }
        });
      }
    }

    /* Height query*/

    if (measurement == 'Height') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '226730';
        var params = [value, unit];
        postgres.execute(sql, params, (err, result) => {
          if (err) {
            callback(err);
          } else {
            callback(result);
          }
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 226730 LIMIT 2;';
        postgres.execute(sql, null, (err, result) => {
          if (err) {
            callback(err);
          } else {
            callback(result);
          }
        });
      }
    }

    /* Blood Pressure query */

    /* Blood Glucose query */

    /* Blood Oxygen */

    /* Tobacco Use */

    /* Lung Sounds */
  }




  Value.remoteMethod('addValue',
    {
      isStatic: true,
      consumes: ['application/json'],
      accepts:
        [{
          arg: 'value',
          type: 'string',
          description: 'The measurement value of the database.',
          required: false,
          http: { source: 'query' }
        },
        {
          arg: 'measurement',
          type: 'string',
          description: 'The measurement id of the database.',
          required: true,
          http: { source: 'query' }
        }],
      returns: [],
      http: { verb: 'post', path: '' },
      description: undefined
    }
  );

  Value.remoteMethod('getValue',
    {
      isStatic: true,
      produces: ['application/json'],
      accepts:
        [{
          arg: 'value',
          type: 'string',
          description:
            'The value of the the database. Values are given by using the value (e.g.: 185 for height or 8.2 for the blood glucose).',
          required: false,
          http: { source: 'query' }
        },
        {
          arg: 'measurement',
          type: 'string',
          description: 'The measurement id of the database.',
          required: true,
          http: { source: 'query' }
        }],
      returns:
        [{ description: 'OK', type: ['Value'], arg: 'data', root: true }],
      http: { verb: 'get', path: '' },
      description: undefined
    }
  );

}
