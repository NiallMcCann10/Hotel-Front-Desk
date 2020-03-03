module.exports = (app) => {
  app.post(`/guests`, require('./guestsCreate'));
  app.put(`/guests/:id`, require('./guestsUpdate'));
  app.post(`/guests/import`, require('./guestsImport'));
  app.delete(`/guests`, require('./guestsDestroy'));
  app.get(
    `/guests/autocomplete`,
    require('./guestsAutocomplete'),
  );
  app.get(`/guests`, require('./guestsList'));
  app.get(`/guests/:id`, require('./guestsFind'));
};
