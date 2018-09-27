
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

    if (measurement == 'Weight' || measurement == 'weight' || measurement == 'W' || measurement == 'w' || measurement == 'Súly' || measurement == 'súly' || measurement == 'Suly' || measurement == 'suly' || measurement == 'S' || measurement == 's') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '226512';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 226512 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    }

    /* Height query*/

    if (measurement == 'Height' || measurement == 'height' || measurement == 'H' || measurement == 'h' || measurement == 'Magasság' || measurement == 'magasság' || measurement == 'Magassag' || measurement == 'magassag' || measurement == 'M' || measurement == 'm') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '226730';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 226730 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    }

    /* Blood Pressure query */
    /* Value is gonna be added like 120/80 */
    if (measurement == 'Blood Pressure' || measurement == 'BP' || measurement == 'Blood pressure' || measurement == 'blood pressure' || measurement == 'bp' || measurement == 'Vérnyomás' || measurement == 'vérnyomás' || measurement == 'Vernyomas' || measurement == 'vernyomas' || measurement == 'V' || measurement == 'v') {
      /* systolic query */
      if (value != undefined) {
        systolic = value.split('/')[0];
        diastolic = value.split('/')[1];

        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '220050';
        var params = [systolic, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 220050 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }

      /* diastolic query */
      if (value != undefined) {

        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '220051';
        var params = [diastolic, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 220051 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    }

    /* Blood Glucose query */

    if (measurement == 'Blood Glucose' || measurement == 'BG' || measurement == 'Blood glucose' || measurement == 'blood glucose' || measurement == 'bg' || measurement == 'Vércukor' || measurement == 'vércukor' || measurement == 'Vercukor' || measurement == 'vercukor' || measurement == 'Vércukorszint' || measurement == 'vércukorszint' || measurement == 'Vercukorszint' || measurement == 'vercukorszint') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '1529';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 1529 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    }

    /* Blood Oxygen query */

    if (measurement == 'Blood Oxygen' || measurement == 'BO' || measurement == 'Blood oxygen' || measurement == 'blood oxygen' || measurement == 'bo' || measurement == 'Véroxigén' || measurement == 'véroxigén' || measurement == 'Veroxigen' || measurement == 'veroxigen' || measurement == 'Véroxigénszint' || measurement == 'véroxigénszint' || measurement == 'Veroxigenszint' || measurement == 'veroxigenszint') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '220277';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 220277 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    }

    /* Tobacco Use query*/

    if (measurement == 'Tobacco' || measurement == 'tobacco' || measurement == 'Tobacco use' || measurement == 'tobacco use' || measurement == 'TU' || measurement == 'T' || measurement == 'Dohányzás' || measurement == 'dohányzás' || measurement == 'Dohanyzas' || measurement == 'dohanyzas') {
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '227687';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 227687 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    }

    /* Lung Sounds query*/

    if (measurement == 'Lung Sound' || measurement == 'Lung sound' || measurement == 'lung sound' || measurement == 'loung sounds' || measurement == 'lu' || measurement == 'LU' || measurement == 'Tüdőhang' || measurement == 'tüdőhang' || measurement == 'Tudohang' || measurement == 'tudohang') {
      /* rll query */
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '593';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 593 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }

      /* rul query */
      if (value != undefined) {
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '599';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 599 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }

      /* lll query */
      if(value != undefined){
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '425';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 425 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }

      /* lul query */
      if(value != undefined){
        var sql = 'SELECT value FROM result WHERE value = $1 AND itemid = $2 LIMIT 2;';
        var unit = '428';
        var params = [value, unit];
        postgres.execute(sql, params, function(data, error){
          callback(data,error);
        });
      }
      if (value == undefined) {
        var sql = 'SELECT value FROM result WHERE itemid = 428 LIMIT 2;';
        postgres.execute(sql, null, function(data, error){
          callback(data,error);
        });
      }
    } 
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
          description: 'The measurement name of the database.',
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
          description: 'The measurement name of the database.',
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
