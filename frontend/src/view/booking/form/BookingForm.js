import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/booking/bookingModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';
import GuestsAutocompleteFormItem from 'view/guests/autocomplete/GuestsAutocompleteFormItem';

const { fields } = model;

class BookingForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.firstName,
    fields.lastName,
    fields.arrivalDate,
    fields.departureDate,
    fields.clientNotes,
    fields.employeeNotes,
    fields.photos,
    fields.status,
    fields.cancellationNotes,
    fields.cost,
    fields.receipt,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.firstName.name}
                  label={fields.firstName.label}
                  required={fields.firstName.required}
                  autoFocus
                />
                <GuestsAutocompleteFormItem
                  name={fields.lastName.name}
                  label={fields.lastName.label}
                  required={fields.lastName.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <DatePickerFormItem
                  name={fields.arrivalDate.name}
                  label={fields.arrivalDate.label}
                  required={fields.arrivalDate.required}
                  showTime
                />
                <DatePickerFormItem
                  name={fields.departureDate.name}
                  label={fields.departureDate.label}
                  required={fields.departureDate.required}
                  showTime
                />
                <TextAreaFormItem
                  name={fields.clientNotes.name}
                  label={fields.clientNotes.label}
                  required={fields.clientNotes.required}
                />
                <TextAreaFormItem
                  name={fields.employeeNotes.name}
                  label={fields.employeeNotes.label}
                  required={fields.employeeNotes.required}
                />
                <ImagesFormItem
                  name={fields.photos.name}
                  label={fields.photos.label}
                  required={fields.photos.required}
                  path={fields.photos.path}
                  schema={{
                    size: fields.photos.size,
                  }}
                  max={fields.photos.max}
                />
                <SelectFormItem
                  name={fields.status.name}
                  label={fields.status.label}
                  options={fields.status.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.status.required}
                />
                <TextAreaFormItem
                  name={fields.cancellationNotes.name}
                  label={fields.cancellationNotes.label}
                  required={fields.cancellationNotes.required}
                />
                <InputFormItem
                  name={fields.cost.name}
                  label={fields.cost.label}
                  required={fields.cost.required}
                />
                <FilesFormItem
                  name={fields.receipt.name}
                  label={fields.receipt.label}
                  required={fields.receipt.required}
                  path={fields.receipt.path}
                  schema={{
                    size: fields.receipt.size,
                    formats: fields.receipt.formats,
                  }}
                  max={fields.receipt.max}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default BookingForm;
