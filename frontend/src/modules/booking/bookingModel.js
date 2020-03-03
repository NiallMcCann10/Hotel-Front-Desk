import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import FilesField from 'modules/shared/fields/filesField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.booking.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.booking.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  firstName: new StringField('firstName', label('firstName'), {}),
  lastName: new RelationToOneField('lastName', label('lastName'), {}),
  arrivalDate: new DateTimeField('arrivalDate', label('arrivalDate'), {
    "required": true
  }),
  departureDate: new DateTimeField('departureDate', label('departureDate'), {
    "required": true
  }),
  clientNotes: new StringField('clientNotes', label('clientNotes'), {
    "max": 20000
  }),
  employeeNotes: new StringField('employeeNotes', label('employeeNotes'), {
    "max": 20000
  }),
  photos: new ImagesField('photos', label('photos'), 'booking/photos',{
    "size": 3000000
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Booked', label: enumeratorLabel('status', 'Booked') },
    { id: 'Progress', label: enumeratorLabel('status', 'Progress') },
    { id: 'Cancelled', label: enumeratorLabel('status', 'Cancelled') },
    { id: 'Complete', label: enumeratorLabel('status', 'Complete') },
  ],{
    "required": true
  }),
  cancellationNotes: new StringField('cancellationNotes', label('cancellationNotes'), {
    "max": 20000
  }),
  cost: new DecimalField('cost', label('cost'), {
    "scale": 2
  }),
  receipt: new FilesField('receipt', label('receipt'), 'booking/receipt',{
    "size": 3000000
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  arrivalDateRange: new DateTimeRangeField(
    'arrivalDateRange',
    label('arrivalDateRange'),
  ),
  departureDateRange: new DateTimeRangeField(
    'departureDateRange',
    label('departureDateRange'),
  ),
  costRange: new DecimalRangeField(
    'costRange',
    label('costRange'),
  ),
};

export default {
  fields,
};
