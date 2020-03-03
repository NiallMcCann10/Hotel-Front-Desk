const genericFixture = require('./genericFixture');
const GuestsRepository = require('../database/repositories/guestsRepository');

const guestsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new GuestsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = guestsFixture;
