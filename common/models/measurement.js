
module.exports = function(Measurement) {

/**
 * addMeasurement
 * @param {string} row_id The row_id of the given Measurement object.
 * @param {number} itemid The itemid of the given Measurement object.
 * @param {number} subject_id The subject_id of the given Measurement object.
 * @param {string} value The value of the given Measurement object.
 * @param {string} valueuom The unit of the given Measurement object.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Measurement.addMeasurement = function(row_id, itemid, subject_id, value, valueuom, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getMeasurement
 * @param {number} itemid The type of the given Measurement object. Values are given by using the itemid (e.g.: itemid for height is 226730 or 1529 for the blood glucose).
 * @param {string} value The value of the given Measurement object. Values are given by using the value (e.g.: 185 for height or 8.2 for the blood glucose).
 * @param {string} valueuom The unit of the given Measurement object. Values are given by using the valueuom (e.g.: cm for height or mg/dL).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Measurement} result Result object
 */
Measurement.getMeasurement = function(itemid, value, valueuom, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * deleteMeasurement
 * @param {number} row_id undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Measurement.deleteMeasurement = function(row_id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * updateMeasurement
 * @param {number} row_id The row_id of the given Measurement object. Values are given by using the row_id (e.g.: 243).
 * @param {number} itemid The itemid of the given Measurement object. Values are given by using the itemid (e.g.: 1529).
 * @param {number} subject_id The subject_id of the given Measurement object. Values are given by using the subject_id (e.g.: 667).
 * @param {string} value The value of the given Measurement object. Values are given by using value (e.g.: 128).
 * @param {string} valueuom The unit of the given Measurement object. Values are given by using valueuom(e.g.: mg/dL).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Measurement.updateMeasurement = function(row_id, itemid, subject_id, value, valueuom, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Measurement.remoteMethod('addMeasurement',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'row_id',
       type: 'string',
       description: 'The row_id of the given Measurement object.',
       required: false,
       http: { source: 'query' } },
     { arg: 'itemid',
       type: 'number',
       description: 'The itemid of the given Measurement object.',
       required: true,
       http: { source: 'query' } },
     { arg: 'subject_id',
       type: 'number',
       description: 'The subject_id of the given Measurement object.',
       required: false,
       http: { source: 'query' } },
     { arg: 'value',
       type: 'string',
       description: 'The value of the given Measurement object.',
       required: true,
       http: { source: 'query' } },
     { arg: 'valueuom',
       type: 'string',
       description: 'The unit of the given Measurement object.',
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '/measurements' },
  description: undefined }
);

Measurement.remoteMethod('getMeasurement',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'itemid',
       type: 'number',
       description:
        'The type of the given Measurement object. Values are given by using the itemid (e.g.: itemid for height is 226730 or 1529 for the blood glucose).',
       required: true,
       http: { source: 'query' } },
     { arg: 'value',
       type: 'string',
       description:
        'The value of the given Measurement object. Values are given by using the value (e.g.: 185 for height or 8.2 for the blood glucose).',
       required: false,
       http: { source: 'query' } },
     { arg: 'valueuom',
       type: 'string',
       description:
        'The unit of the given Measurement object. Values are given by using the valueuom (e.g.: cm for height or mg/dL).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'Measurement' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/measurements' },
  description: undefined }
);

Measurement.remoteMethod('deleteMeasurement',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'row_id',
       type: 'number',
       description: undefined,
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'delete', path: '/measurements' },
  description: undefined }
);

Measurement.remoteMethod('updateMeasurement',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'row_id',
       type: 'number',
       description:
        'The row_id of the given Measurement object. Values are given by using the row_id (e.g.: 243).',
       required: true,
       http: { source: 'path' } },
     { arg: 'itemid',
       type: 'number',
       description:
        'The itemid of the given Measurement object. Values are given by using the itemid (e.g.: 1529).',
       required: false,
       http: { source: 'query' } },
     { arg: 'subject_id',
       type: 'number',
       description:
        'The subject_id of the given Measurement object. Values are given by using the subject_id (e.g.: 667).',
       required: false,
       http: { source: 'query' } },
     { arg: 'value',
       type: 'string',
       description:
        'The value of the given Measurement object. Values are given by using value (e.g.: 128).',
       required: false,
       http: { source: 'query' } },
     { arg: 'valueuom',
       type: 'string',
       description:
        'The unit of the given Measurement object. Values are given by using valueuom(e.g.: mg/dL).',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'put', path: '/:row_id' },
  description: undefined }
);

}
