const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Guests extends AbstractEntityModel {
  constructor() {
    super('guests', 'guests', {
      firstName: new types.String(null, null),
      lastName: new types.String(null, 255),
      bookings: new types.RelationToMany(),
      phone: new types.String(null, null),
      email: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
