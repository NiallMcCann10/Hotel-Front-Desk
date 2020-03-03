import model from 'modules/guests/guestsModel';

const { fields } = model;

export default [
  fields.id,
  fields.firstName,
  fields.lastName,
  fields.phone,
  fields.email,
  fields.createdAt,
  fields.updatedAt
];
