import model from 'modules/guests/guestsModel';

const { fields } = model;

export default [
  fields.firstName,
  fields.lastName,
  fields.bookings,
  fields.phone,
  fields.email,
];
