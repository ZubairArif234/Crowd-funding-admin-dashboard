import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import {Progress} from 'antd';
import Smallcard from './dashboardtopsmallcards'
import graphbluesmall from './graphbluesmall.png';
import graphgreensmall from './graphgreensmall.png';
import graphorangesmall from './graphorangesmall.png';
import graphyellowsmall from './graphyellowsmall.png';
import Campaigndetailcards from './campaigndetailcards';
import { Divider } from 'antd';
import '../../campaigndetails.css'

import { useNavigate } from 'react-router-dom';
const Campaigndetailinnercontent = ( {image , heading , priceone , pricetwo}) => {
  const navigate =useNavigate()
  return (
    <div>
        <p className='addcreatorheading' style={{marginLeft:'0px'}}> Campaign Detail</p>
        <p className='gobacklinkcamapign' onClick={() => window.history.back()} >Go back</p>
        <Row >
            <Col sm={12} md={6} lg={3}>
               <Campaigndetailcards bordercolour='3px solid darkgreen' graphimg={graphgreensmall} />
             {/* <Smallcard/> */}
             </Col>
             <Col sm={12} md={6} lg={3}>
               <Campaigndetailcards bordercolour='3px solid orangered' graphimg={graphorangesmall}/>
               {/* <Smallcard/> */}
                            </Col>
            <Col sm={12} md={6} lg={3}>
              <Campaigndetailcards bordercolour='3px solid #3A6FF8' graphimg={graphbluesmall}/>
               {/* <Smallcard/> */}
             </Col>
             <Col sm={12} md={6} lg={3}>
                 <Campaigndetailcards bordercolour='3px solid yellow' graphimg={graphyellowsmall}/>
               {/* <Smallcard/> */}
             </Col>
           </Row>
           <Row>
            <Col lg={9}>
                <div className='campaigndetailaboutmaindiv'>
                  <div style={{display:'flex' , justifyContent:'space-between' , flexWrap:'wrap'}}>
                    <p className='dashboardcardtoponesmalltext'>About Campaign</p>
                    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='catagoriesdetailbtndropdown' >
        Catagories
      </Dropdown.Toggle>

      <Dropdown.Menu style={{borderBottom:'6px solid #6100B3'}}>
        <Dropdown.Item >Pop</Dropdown.Item>
        <Dropdown.Item >Rock </Dropdown.Item>
        <Dropdown.Item >Blues </Dropdown.Item>
        <Dropdown.Item > Hip Hop</Dropdown.Item>
        <Dropdown.Item >Classical </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                  </div>
                    <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.

Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.


</p>
<ul>
    <li>Quis autem vel eum iure</li>
    <li>Ut enim ad minima veniam</li>
    <li>Et harum quidem rerum</li>
    <li>Nam libero cum soluta</li>
</ul>
<Divider/>

<p className='dashboardcardtoponesmalltext'>Tags </p>

<div className='campaigndaetailtagdiv'>
    <p className='campaigndetailtags'>Rock</p>
    <p className='campaigndetailtags'>Hip Hop</p>
    <p className='campaigndetailtags'>Jazz</p>
    <p className='campaigndetailtags'>Pop</p>
</div>
<div className='campaigndetaildatebox'>
    <div className='campaigndetaildateboxdateone1'>
        <div className='campaigndetaildatedivone'>
        <svg width="12" height="12" style={{marginTop:'5px' ,marginRight:'5px'}} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.42383 0.766113V2.05298M9.35742 0.766113V2.05298M1.30469 9.77417V3.33984C1.30469 2.99855 1.43865 2.67123 1.6771 2.42989C1.91555 2.18856 2.23895 2.05298 2.57617 2.05298H10.2051C10.5423 2.05298 10.8657 2.18856 11.1042 2.42989C11.3426 2.67123 11.4766 2.99855 11.4766 3.33984V9.77417M1.30469 9.77417C1.30469 10.1155 1.43865 10.4428 1.6771 10.6841C1.91555 10.9255 2.23895 11.061 2.57617 11.061H10.2051C10.5423 11.061 10.8657 10.9255 11.1042 10.6841C11.3426 10.4428 11.4766 10.1155 11.4766 9.77417M1.30469 9.77417V5.48462C1.30469 5.14332 1.43865 4.816 1.6771 4.57467C1.91555 4.33333 2.23895 4.19775 2.57617 4.19775H10.2051C10.5423 4.19775 10.8657 4.33333 11.1042 4.57467C11.3426 4.816 11.4766 5.14332 11.4766 5.48462V9.77417" stroke="#FF5C75" stroke-width="0.802979" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            
            <p>START DATE</p></div>
            <p className='dashboardcardtoponesmalltext'>15 July, 2019</p>
    </div>


    <div className='campaigndetaildateboxdateone1'>
        <div className='campaigndetaildatedivone'>
        <svg width="17" height="17" viewBox="0 0 17 17"style={{marginTop:'5px' ,marginRight:'5px'}} fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36719 3.76611V5.05298M12.3008 3.76611V5.05298M4.24805 12.7742V6.33984C4.24805 5.99855 4.38201 5.67123 4.62046 5.42989C4.85891 5.18856 5.18231 5.05298 5.51953 5.05298H13.1484C13.4857 5.05298 13.8091 5.18856 14.0475 5.42989C14.286 5.67123 14.4199 5.99855 14.4199 6.33984V12.7742M4.24805 12.7742C4.24805 13.1155 4.38201 13.4428 4.62046 13.6841C4.85891 13.9255 5.18231 14.061 5.51953 14.061H13.1484C13.4857 14.061 13.8091 13.9255 14.0475 13.6841C14.286 13.4428 14.4199 13.1155 14.4199 12.7742M4.24805 12.7742V8.48462C4.24805 8.14332 4.38201 7.816 4.62046 7.57467C4.85891 7.33333 5.18231 7.19775 5.51953 7.19775H13.1484C13.4857 7.19775 13.8091 7.33333 14.0475 7.57467C14.286 7.816 14.4199 8.14332 14.4199 8.48462V12.7742" stroke="#FF5C75" stroke-width="0.802979" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.24805 1.38281L16.248 16.3828" stroke="#FF5C75" stroke-linecap="round"/>
<path d="M4.24805 3.38281L15.248 14.3828" stroke="white" stroke-linecap="round"/>
</svg>


            
            <p>DUE DATE</p></div>
            <p className='dashboardcardtoponesmalltext'>15 July, 2019</p>
    </div>


    <div className='campaigndetaildateboxdateone1'>
        <div className='campaigndetaildatedivone'>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" style={{marginTop:'5px' ,marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg">
<path d="M4.24805 1.38281V13.3828M1.24805 10.5648L2.12705 11.2238C3.29805 12.1028 5.19705 12.1028 6.36905 11.2238C7.54105 10.3448 7.54105 8.92081 6.36905 8.04181C5.78405 7.60181 5.01605 7.38281 4.24805 7.38281C3.52305 7.38281 2.79805 7.16281 2.24505 6.72381C1.13905 5.84481 1.13905 4.42081 2.24505 3.54181C3.35105 2.66281 5.14505 2.66281 6.25105 3.54181L6.66605 3.87181" stroke="#FF5C75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            
            <p>BUDGET </p></div>
            <p className='dashboardcardtoponesmalltext'>$15,000</p>
    </div>


    <div className='campaigndetaildateboxdateone1'>
        <div className='campaigndetaildatedivone'>
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" style={{marginTop:'5px' ,marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg">
<path d="M7.28349 5.54326C6.80996 6.01679 6.16772 6.28281 5.49805 6.28281C4.82838 6.28281 4.18613 6.01679 3.7126 5.54326C3.23907 5.06973 2.97305 4.42748 2.97305 3.75781C2.97305 3.08814 3.23907 2.4459 3.7126 1.97237C4.18613 1.49884 4.82838 1.23281 5.49805 1.23281C6.16772 1.23281 6.80996 1.49884 7.28349 1.97237C7.75702 2.4459 8.02305 3.08814 8.02305 3.75781C8.02305 4.42748 7.75702 5.06973 7.28349 5.54326ZM2.95246 6.3034C3.62759 6.97853 4.54327 7.35781 5.49805 7.35781C6.45283 7.35781 7.3685 6.97853 8.04363 6.3034C8.71876 5.62827 9.09805 4.71259 9.09805 3.75781C9.09805 2.80303 8.71876 1.88736 8.04363 1.21223C7.3685 0.537097 6.45283 0.157812 5.49805 0.157812C4.54327 0.157812 3.62759 0.537097 2.95246 1.21223C2.27733 1.88736 1.89805 2.80303 1.89805 3.75781C1.89805 4.71259 2.27733 5.62827 2.95246 6.3034ZM9.77305 10.3203V11.6328C9.77305 11.7754 9.82968 11.9121 9.93048 12.0129C10.0313 12.1137 10.168 12.1703 10.3105 12.1703C10.4531 12.1703 10.5898 12.1137 10.6906 12.0129C10.7914 11.9121 10.848 11.7754 10.848 11.6328V10.3203C10.848 9.71363 10.607 9.13179 10.1781 8.70281C9.74906 8.27382 9.16723 8.03281 8.56055 8.03281H2.43555C1.82886 8.03281 1.24703 8.27382 0.81804 8.70281C0.389051 9.13179 0.148047 9.71363 0.148047 10.3203V11.6328C0.148047 11.7754 0.204676 11.9121 0.305477 12.0129C0.406278 12.1137 0.542993 12.1703 0.685547 12.1703C0.8281 12.1703 0.964816 12.1137 1.06562 12.0129C1.16642 11.9121 1.22305 11.7754 1.22305 11.6328V10.3203C1.22305 9.99874 1.35079 9.69033 1.57818 9.46295C1.80557 9.23556 2.11397 9.10781 2.43555 9.10781H8.56055C8.88212 9.10781 9.19053 9.23556 9.41791 9.46295C9.6453 9.69033 9.77305 9.99874 9.77305 10.3203Z" fill="#FF5C75" stroke="#FF5C75" stroke-width="0.2"/>
</svg>


            
            <p>ONWER</p></div>
            <p className='dashboardcardtoponesmalltext'>Zubair</p>
    </div>
</div>


                </div>
            </Col>
            <Col lg={3}>
                <div className='campaigndetailaboutimgdiv'>
                    <img src={image} style={{width:'100%'}}/>

                    <div>
                        <p className='campaignprofileheading'>{heading}</p>
                        <Progress
            strokeColor="#6100B3"
            percent={70}
            showInfo={false}
            trailColor='#cfc1da'
            style={{ height: "1px" }}
          />
          <div className="poppriceanddetail">
            <div>
              <p className="popcardprice">
                {priceone} <br />
                <span className="popcardpricedetail">Pledged</span>
              </p>
            </div>
            <div>
              <p className="popcardprice">
                {pricetwo} <br />
                <span className="popcardpricedetailend">Target</span>
              </p>
            </div>
          </div>
          <button className='campaigndetailsapprovebtn'>Approve</button>
          <button className='campaigndetailsnotapprovebtn'>Not Approve</button>

                    </div>
                </div>
            </Col>
           </Row>
    </div>
  )
}

export default Campaigndetailinnercontent