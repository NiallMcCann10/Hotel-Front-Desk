const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Booking extends AbstractEntityModel {
  constructor() {
    super('booking', 'booking', {
      firstName: new types.String(null, null),
      lastName: new types.RelationToOne(),
      arrivalDate: new types.DateTime(),
      departureDate: new types.DateTime(),
      clientNotes: new types.String(null, 20000),
      employeeNotes: new types.String(null, 20000),
      photos: new types.Files(),
      status: new types.Enumerator([
        "Booked",
        "Progress",
        "Cancelled",
        "Complete"
      ]),
      cancellationNotes: new types.String(null, 20000),
      cost: new types.Number(null, null),
      receipt: new types.Files(),
      importHash: new types.String(null, 255),
    });
  }
};
