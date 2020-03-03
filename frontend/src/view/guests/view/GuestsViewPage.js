import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import GuestsView from 'view/guests/view/GuestsView';
import { i18n } from 'i18n';
import actions from 'modules/guests/view/guestsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/guests/view/guestsViewSelectors';
import GuestsViewToolbar from 'view/guests/view/GuestsViewToolbar';

class GuestsPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.guests.menu'), '/guests'],
            [i18n('entities.guests.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.guests.view.title')}
          </PageTitle>

          <GuestsViewToolbar match={this.props.match} />

          <GuestsView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(GuestsPage);
