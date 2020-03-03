import React, { Component } from 'react';
import GuestsListFilter from 'view/guests/list/GuestsListFilter';
import GuestsListTable from 'view/guests/list/GuestsListTable';
import GuestsListToolbar from 'view/guests/list/GuestsListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class GuestsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.guests.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.guests.list.title')}
          </PageTitle>

          <GuestsListToolbar />
          <GuestsListFilter />
          <GuestsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default GuestsListPage;
