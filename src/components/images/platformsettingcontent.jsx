import React from 'react'
import '../../platformsetting.css'
import { Col, Row } from 'react-bootstrap'
import graphicon from '../images/bell.png'
import logo from '../images/logo.png'
const Platformsettingcontent = () => {
  return (
    <div>
         <p className='addcreatorheading'>Platform setting  </p>
<div className='platformdetails' style={{backgroundColor:'yellow'}}>
<Row>
    <Col lg={6}>
        <div style={{display:'flex' , alignItems:'center'}}>
            <label>Website icon : </label>
            <img src={graphicon}/>
        </div>
        <div style={{display:'flex' , alignItems:'center'}}>
            <label>Website logo : </label>
            <img src={logo} width={100}/>
        </div>
        <div style={{display:'flex' , alignItems:'center'}}>
            <label>Website Name : </label>
            <label>Crowd funding </label>
            
        </div>
        <div style={{display:'flex' , alignItems:'center'}}>
            <label>Website Description : </label>
            <label>Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet. Crowdfunding is a form of crowdsourcing and alternative finance. </label>
            
        </div>
    </Col>
    <Col lg={6}></Col>
</Row>
</div>

    </div>
  )
}

export default Platformsettingcontent