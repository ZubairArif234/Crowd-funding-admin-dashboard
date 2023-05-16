import React from 'react'
import Smallcard from './dashboardtopsmallcards';
import Dashboardtotaluser from './dashboardtotaluser';
import Navbarcrowd from './navbar';
import graphbluesmall from './graphbluesmall.png';
import graphgreensmall from './graphgreensmall.png';
import graphorangesmall from './graphorangesmall.png';
import graphyellowsmall from './graphyellowsmall.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Linechart from './chartdashboardline';
import BarChart from './barchatdashboard';

const Homechartsandall = () => {
  return (
    // <div>
<>
<Row >
            <Col sm={12} md={6} lg={3}>
               <Smallcard bordercolour='3px solid darkgreen' graphimg={graphgreensmall} />
             {/* <Smallcard/> */}
             </Col>
             <Col sm={12} md={6} lg={3}>
               <Smallcard bordercolour='3px solid orangered' graphimg={graphorangesmall}/>
               {/* <Smallcard/> */}
                            </Col>
            <Col sm={12} md={6} lg={3}>
              <Smallcard bordercolour='3px solid #3A6FF8' graphimg={graphbluesmall}/>
               {/* <Smallcard/> */}
             </Col>
             <Col sm={12} md={6} lg={3}>
                 <Smallcard bordercolour='3px solid yellow' graphimg={graphyellowsmall}/>
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
          </>
    // </div>
  )
}

export default Homechartsandall