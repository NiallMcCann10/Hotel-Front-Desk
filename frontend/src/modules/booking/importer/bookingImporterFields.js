import model from 'modules/booking/bookingModel';

const { fields } = model;

export default [
  fields.firstName,
  fields.lastName,
  fields.arrivalDate,
  fields.departureDate,
  fields.clientNotes,
  fields.employeeNotes,
  fields.photos,
  fields.status,
  fields.cancellationNotes,
  fields.cost,
  fields.receipt,
];
