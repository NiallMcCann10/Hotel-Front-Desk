import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import { Row, Col, Card } from 'antd';
import HomeBarChart from 'view/home/HomeBarChart';
import HomeDoughnutChart from 'view/home/HomeDoughnutChart';
import HomeRadarChart from 'view/home/HomeRadarChart';

class HomePage extends PureComponent {
  render() {
    const twoColumnsResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12,
      style: { marginBottom: 24 },
    };

    const threeColumnsResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 8,
      style: { marginBottom: 24 },
    };

    return (
      <React.Fragment>
        <Row gutter={24}>
          <Col {...threeColumnsResponsiveProps}>
            <Card bodyStyle={{ padding: 8 }}>
              <HomeDoughnutChart />
            </Card>
          </Col>
          <Col {...threeColumnsResponsiveProps}>
            <Card bodyStyle={{ padding: 8 }}>
              <HomeBarChart />
            </Card>
          </Col>
          <Col {...threeColumnsResponsiveProps}>
            <Card bodyStyle={{ padding: 8 }}>
              <HomeRadarChart />
            </Card>
          </Col>
        </Row>
        <p
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          {i18n('home.message')}
        </p>
      </React.Fragment>
    );
  }
}

export default connect(null)(HomePage);
