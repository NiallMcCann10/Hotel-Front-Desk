import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/guests/guestsModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import BookingAutocompleteFormItem from 'view/booking/autocomplete/BookingAutocompleteFormItem';

const { fields } = model;

class GuestsForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.firstName,
    fields.lastName,
    fields.bookings,
    fields.phone,
    fields.email,
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
                <InputFormItem
                  name={fields.lastName.name}
                  label={fields.lastName.label}
                  required={fields.lastName.required}
                />
                <BookingAutocompleteFormItem
                  name={fields.bookings.name}
                  label={fields.bookings.label}
                  required={fields.bookings.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <InputFormItem
                  name={fields.phone.name}
                  label={fields.phone.label}
                  required={fields.phone.required}
                />
                <InputFormItem
                  name={fields.email.name}
                  label={fields.email.label}
                  required={fields.email.required}
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

export default GuestsForm;
