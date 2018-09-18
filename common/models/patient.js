
module.exports = function(Patient) {

/**
 * addPatient
 * @param {string} gender The gender of the given Patient object.
 * @param {string} dob The date of birth of the given Patient object.
 * @param {string} dod The date of death of the given Patient object.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Patient.addPatient = function(gender, dob, dod, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * getPatient
 * @param {string} gender The gender of the given Patient object. Values are given by using the sex (e.g.: F - female or M - male).
 * @param {number} age The age of the given Patient object. Values are given by using age() SQL method (e.g.: age(1966-07-21) returns number 52).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Patient} result Result object
 */
Patient.getPatient = function(gender, age, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * deletePatient
 * @param {number} row_id undefined
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Patient.deletePatient = function(row_id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * updatePatient
 * @param {number} row_id The row_id of the given Patient object. Values are given by using the row_id (e.g.: 243).
 * @param {number} subject_id The subject_id of the given Patient object. Values are given by using the subject_id (e.g.: 647).
 * @param {string} gender The gender of the given Patient object. Values are given by using the sex (e.g.: F - female or M - male).
 * @param {string} dob The date of birth of the given Patient object. Values are given by using dob(e.g.: 1966-07-21).
 * @param {string} dod The date of death of the given Patient object. Values are given by using dod(e.g.: 2006-09-11).
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Patient.updatePatient = function(row_id, subject_id, gender, dob, dod, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Patient.remoteMethod('addPatient',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'gender',
       type: 'string',
       description: 'The gender of the given Patient object.',
       required: false,
       http: { source: 'query' } },
     { arg: 'dob',
       type: 'string',
       description: 'The date of birth of the given Patient object.',
       required: false,
       http: { source: 'query' } },
     { arg: 'dod',
       type: 'string',
       description: 'The date of death of the given Patient object.',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'post', path: '' },
  description: undefined }
);

Patient.remoteMethod('getPatient',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts:
   [ { arg: 'gender',
       type: 'string',
       description:
        'The gender of the given Patient object. Values are given by using the sex (e.g.: F - female or M - male).',
       required: false,
       http: { source: 'query' } },
     { arg: 'age',
       type: 'number',
       description:
        'The age of the given Patient object. Values are given by using age() SQL method (e.g.: age(1966-07-21) returns number 52).',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: [ 'Patient' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

Patient.remoteMethod('deletePatient',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'row_id',
       type: 'number',
       description: undefined,
       required: true,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'delete', path: '' },
  description: undefined }
);

Patient.remoteMethod('updatePatient',
  { isStatic: true,
  consumes: [ 'application/json' ],
  accepts:
   [ { arg: 'row_id',
       type: 'number',
       description:
        'The row_id of the given Patient object. Values are given by using the row_id (e.g.: 243).',
       required: true,
       http: { source: 'path' } },
     { arg: 'subject_id',
       type: 'number',
       description:
        'The subject_id of the given Patient object. Values are given by using the subject_id (e.g.: 647).',
       required: false,
       http: { source: 'query' } },
     { arg: 'gender',
       type: 'string',
       description:
        'The gender of the given Patient object. Values are given by using the sex (e.g.: F - female or M - male).',
       required: false,
       http: { source: 'query' } },
     { arg: 'dob',
       type: 'string',
       description:
        'The date of birth of the given Patient object. Values are given by using dob(e.g.: 1966-07-21).',
       required: false,
       http: { source: 'query' } },
     { arg: 'dod',
       type: 'string',
       description:
        'The date of death of the given Patient object. Values are given by using dod(e.g.: 2006-09-11).',
       required: false,
       http: { source: 'query' } } ],
  returns: [],
  http: { verb: 'put', path: '/:row_id' },
  description: undefined }
);

}
