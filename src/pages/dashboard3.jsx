

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Smallcard from '../components/images/dashboardtopsmallcards';
import Dashboardtotaluser from '../components/images/dashboardtotaluser';
import graphbluesmall from '../components/images/graphbluesmall.png';
import graphgreensmall from '../components/images/graphgreensmall.png';
import graphorangesmall from '../components/images/graphorangesmall.png';
import graphyellowsmall from '../components/images/graphyellowsmall.png';
import Linechart from '../components/images/chartdashboardline';
import BarChart from '../components/images/barchatdashboard';
// import graphbluesmall from '../components/images/graphbluesmall.png';
// import graphgreensmall from '../components/images/graphgreensmall.png';
// import graphorangesmall from '../components/images/graphorangesmall.png';
// import graphyellowsmall from '../components/images/graphyellowsmall.png';
import { Button, Layout, Menu, theme, Dropdown, Space } from 'antd';

import React from 'react'

const Dashboard3 = () => {
    return (
        <div style={{  }}>

            <Row style={{ width: '100%', }}>
                <Col sm={12} md={6} lg={3}>
                    <Smallcard bordercolour='3px solid darkgreen' graphimg={graphgreensmall} />
                    {/* <Smallcard/> */}
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Smallcard bordercolour='3px solid orangered' graphimg={graphorangesmall} />
                    {/* <Smallcard/> */}
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Smallcard bordercolour='3px solid #3A6FF8' graphimg={graphbluesmall} />
                    {/* <Smallcard/> */}
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Smallcard bordercolour='3px solid yellow' graphimg={graphyellowsmall} />
                    {/* <Smallcard/> */}
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                    <Dashboardtotaluser />
                </Col>
                <Col lg={6}>
                    <Linechart />
                </Col>
                <Col lg={3}>
                    <BarChart />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard3