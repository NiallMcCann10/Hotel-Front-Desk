import model from 'modules/booking/bookingModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';
import GuestsViewItem from 'view/guests/view/GuestsViewItem';

const { fields } = model;

class BookingView extends Component {
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

        <GuestsViewItem
          label={fields.lastName.label}
          value={fields.lastName.forView(record.lastName)}
        />

        <TextViewItem
          label={fields.arrivalDate.label}
          value={fields.arrivalDate.forView(record.arrivalDate)}
        />

        <TextViewItem
          label={fields.departureDate.label}
          value={fields.departureDate.forView(record.departureDate)}
        />

        <TextViewItem
          label={fields.clientNotes.label}
          value={fields.clientNotes.forView(record.clientNotes)}
        />

        <TextViewItem
          label={fields.employeeNotes.label}
          value={fields.employeeNotes.forView(record.employeeNotes)}
        />

        <ImagesViewItem
          label={fields.photos.label}
          value={fields.photos.forView(record.photos)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
        />

        <TextViewItem
          label={fields.cancellationNotes.label}
          value={fields.cancellationNotes.forView(record.cancellationNotes)}
        />

        <TextViewItem
          label={fields.cost.label}
          value={fields.cost.forView(record.cost)}
        />

        <FilesViewItem
          label={fields.receipt.label}
          value={fields.receipt.forView(record.receipt)}
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

export default BookingView;
