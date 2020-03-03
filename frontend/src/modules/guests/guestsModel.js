import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.guests.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  firstName: new StringField('firstName', label('firstName'), {}),
  lastName: new StringField('lastName', label('lastName'), {
    "max": 255
  }),
  bookings: new RelationToManyField('bookings', label('bookings'), {}),
  phone: new StringField('phone', label('phone'), {
    "required": true
  }),
  email: new StringField('email', label('email'), {
    "required": true
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

};

export default {
  fields,
};
