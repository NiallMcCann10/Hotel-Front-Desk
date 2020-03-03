import model from 'modules/guests/guestsModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import BookingViewItem from 'view/booking/view/BookingViewItem';

const { fields } = model;

class GuestsView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.firstName.label}
          value={fields.firstName.forView(record.firstName)}
        />

        <TextViewItem
          label={fields.lastName.label}
          value={fields.lastName.forView(record.lastName)}
        />

        <BookingViewItem
          label={fields.bookings.label}
          value={fields.bookings.forView(record.bookings)}
        />

        <TextViewItem
          label={fields.phone.label}
          value={fields.phone.forView(record.phone)}
        />

        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(record.email)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default GuestsView;
