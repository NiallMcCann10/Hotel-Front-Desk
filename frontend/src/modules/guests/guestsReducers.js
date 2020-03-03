import list from 'modules/guests/list/guestsListReducers';
import form from 'modules/guests/form/guestsFormReducers';
import view from 'modules/guests/view/guestsViewReducers';
import destroy from 'modules/guests/destroy/guestsDestroyReducers';
import importerReducer from 'modules/guests/importer/guestsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
