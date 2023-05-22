





import React from 'react'
import { useState } from "react";
import populararr from '../../pages/data';
import Allfrontpagescard from './allfrontpagescard';
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
        
    <div className="popularcarddiv">
        <Allfrontpagescard heading={'Home'} />
        <Allfrontpagescard heading={'About'} />
        <Allfrontpagescard heading={'Ongoing Project'} />
        <Allfrontpagescard heading={'Detail Project'} />
        <Allfrontpagescard heading={'Completed Project'} />
        <Allfrontpagescard heading={'Blog'} />
        <Allfrontpagescard heading={'Contact'} />
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