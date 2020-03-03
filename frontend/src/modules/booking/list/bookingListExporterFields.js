import model from 'modules/booking/bookingModel';

const { fields } = model;

export default [
  fields.id,
  fields.firstName,
  fields.lastName,
  fields.arrivalDate,
  fields.departureDate,
  fields.clientNotes,
  fields.employeeNotes,
  fields.status,
  fields.cancellationNotes,
  fields.cost,
  fields.receipt,
  fields.createdAt,
  fields.updatedAt
];
