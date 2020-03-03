const lodash = require('lodash');
const assert = require('assert');
const admin = require('firebase-admin');

module.exports = class DateTime {
  validate(data) {
    if (!data) {
      return;
    }

    assert(lodash.isDate(data));
  }

  cast(data) {
    if (!data) {
      return null;
    }

    return admin.firestore.Timestamp.fromDate(
      new Date(data),
    );
  }
};
