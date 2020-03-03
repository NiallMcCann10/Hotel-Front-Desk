const userFixture = require('./userFixture');
const guestsFixture = require('./guestsFixture');
const bookingFixture = require('./bookingFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  guests: guestsFixture,
  booking: bookingFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
