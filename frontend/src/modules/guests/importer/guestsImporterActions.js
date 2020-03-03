import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/guests/importer/guestsImporterSelectors';
import GuestsService from 'modules/guests/guestsService';
import fields from 'modules/guests/importer/guestsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'GUESTS_IMPORTER',
  selectors,
  GuestsService.import,
  fields,
  i18n('entities.guests.importer.fileName'),
);
