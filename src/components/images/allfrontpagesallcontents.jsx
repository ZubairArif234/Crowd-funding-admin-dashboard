





import React from 'react'
import { useState } from "react";
import populararr from '../../pages/data';
import Allfrontpagescard from './allfrontpagescard';
import  allfrontpagecardsdata  from '../../content';

// import Popularcard from './layoutofcampaigncard';

const Allfrontpagesallcontent = () => {

    const [arrlength , setarrlength] = useState(8)
    const arr = populararr.slice(0, arrlength);
    console.log(arr);
  return (
    <>
    <p className='addcreatorheading'> All Front Pages List</p>
    {/* <p className='pendingcampiagnsubtittle'> Pending </p> */}
    <div className="popularsuparmaindiv">

    {/* <div className="popularmaindiv"> */}
        
    <div className="popularcarddiv" style={{justifyContent:'flex-start'}}>


      {allfrontpagecardsdata.map(( values )=>{
        console.log(values.id);
        return(
          <Allfrontpagescard key={values.id} id={values.id} heading={values.pagename} description={values.pagedescription} img={values.pagethumbnailimg}/>
        )
      })}
        {/* <Allfrontpagescard heading={'About'} img={aboutusthumbnail}/>
        <Allfrontpagescard heading={'Ongoing Project'} img={ongoingthumbnail}/>
        <Allfrontpagescard heading={'Detail Project'}  img={projectdetailthumbnail}/>
        <Allfrontpagescard heading={'Completed Project'} img={completeprojectthumbnail}/>
        <Allfrontpagescard heading={'Blog'} img={blogthumbnail}/>
        <Allfrontpagescard heading={'Contact'} img={cotactusthumbnail}/> */}
        {/* <Allfrontpagescard heading={'Home'} /> */}
        
        {/* {
            arr.map((x) => {
                console.log(x.heading);
                return (
                    <Popularcard
                    img={x.image}
                    heading={x.heading}
                    price1={x.price1}
                    price2={x.price2}
                    detail1={x.detail1}
                    detail2={x.detail2}
                    below1={x.below1}
                    below2={x.below2}
                    bordertopcolor={'#3A6FF8'}
                    status={'Active'}
                  />
                );
            })
        } */}
        
    </div>
    {/* </div> */}
    

    </div>
    </>
  )
}

export default Allfrontpagesallcontent