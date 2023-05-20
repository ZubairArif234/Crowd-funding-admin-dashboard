
import React from 'react'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom';
import '../../blog.css'


const Viewblogcards = ({img ,heading ,text , catagories}) => {
    const navigate =useNavigate()

    const state = {
        image:img,
        topheading:heading,
        content:text,
        catagoriesblog:catagories
        // progressprice1: price1,
                //   progressprice2: price2,
                //   campaignstatus:status
    
      }

   


  return (
    <Card
    hoverable
    bordered={false}
    className='pendingcampaigncard'
    style={{
      width: '280px',
      borderRadius: "0",
      marginBottom:'20px',
      padding:'0px'
      //   borderTop:`4px solid ${bordertopcolor}`,
      
      
    }}
    cover={
    <img alt="example"style={{borderRadius:'0px'}} src='data:image/jpeg;base64,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' />}
  >
    {/* <div className='pendingtopimgbtn' style={{backgroundColor:bordertopcolor}}>
        <p>{status}</p>
    </div> */}




{/* <div className='blogpagedivdetailsdiv'>
                <div className='blogpgecardsimgandtext'>
                    <img className='blogpgecardsinnerimg' src={calander}/>
                    <svg width="15" height="20" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 2H8.25V0.78125C8.25 0.640625 8.10938 0.5 7.96875 0.5H7.03125C6.86719 0.5 6.75 0.640625 6.75 0.78125V2H3.75V0.78125C3.75 0.640625 3.60938 0.5 3.46875 0.5H2.53125C2.36719 0.5 2.25 0.640625 2.25 0.78125V2H1.125C0.492188 2 0 2.51562 0 3.125V11.375C0 12.0078 0.492188 12.5 1.125 12.5H9.375C9.98438 12.5 10.5 12.0078 10.5 11.375V3.125C10.5 2.51562 9.98438 2 9.375 2ZM9.23438 11.375H1.26562C1.17188 11.375 1.125 11.3281 1.125 11.2344V4.25H9.375V11.2344C9.375 11.3281 9.30469 11.375 9.23438 11.375ZM7.99219 6.6875C8.08594 6.57031 8.08594 6.40625 7.99219 6.28906L7.45312 5.75C7.35938 5.63281 7.17188 5.63281 7.05469 5.75L4.45312 8.32812L3.42188 7.29688C3.30469 7.17969 3.14062 7.17969 3.02344 7.29688L2.48438 7.8125C2.39062 7.92969 2.39062 8.11719 2.48438 8.21094L4.24219 9.99219C4.35938 10.1094 4.54688 10.1094 4.64062 9.99219L7.99219 6.6875Z" fill="#1B70F0"/>
</svg>

                    <p  className='blogpgecardsinnerimgtext'>September 15, 2018</p>
                </div>
                <div className='blogpgecardsimgandtext'>
                    <img  className='blogpgecardsinnerimg' src={user}/>
                    <p className='blogpgecardsinnerimgtext'>Diboli B. Joly</p>
                </div>
                <div className='blogpgecardsimgandtext'>
                    <img  className='blogpgecardsinnerimg' src={messages}/>
                    <p className='blogpgecardsinnerimgtext'>23 Comments</p>
                </div>
            </div> */}
            <div style={{display:'flex' , justifyContent:"space-between"}}>
                <p style={{backgroundColor:'orange' , padding:'2px 30px' , borderRadius:'5px' , color:'white'}}>{catagories}</p>
                {/* <p style={{backgroundColor:'green' , padding:'5px 30px' , borderRadius:'5px' , color:'white'}}>{year + "-" + month + "-" + day}</p> */}
            </div>
    <p className="blogcontectheading">{heading}</p>
    <div className="popprogressprice">
        <p className='blogcontentext'>{text}</p>
      {/* <Progress
        strokeColor="#1B70F0"
        percent={70}
        showInfo={false}
        trailColor='#E7EBFF'
        style={{ height: "1px" }}
      /> */}
      {/* <div className="poppriceanddetail">
        <div>
          <p className="popcardprice">
            {price1} <br />
            <span className="popcardpricedetail">Pledged</span>
          </p>
        </div>
        <div>
          <p className="popcardprice">
            {price2} <br />
            <span className="popcardpricedetailend">Target</span>
          </p>
        </div>
      </div> */}
      <div>
        <button className='pendingcampaingcards' onClick={()=>{navigate('/blogdetails' , { state:state})}} >
            View More
        </button>
      </div>
      {/* <div>
        <div className="poppriceanddetailbelow">
          <p className="popcardpricebelow">by romada D. </p>
          <p className="popcardpricebelow">at london </p>
        </div>
      </div> */}
    </div>
  </Card>
  )
}

export default Viewblogcards