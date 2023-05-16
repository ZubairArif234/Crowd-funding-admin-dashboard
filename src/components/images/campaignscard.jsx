

import React from 'react'
import { useState } from "react";
import populararr from '../../pages/data';
import Popularcard from './layoutofcampaigncard';

const Campaignscard = () => {

    const [arrlength , setarrlength] = useState(8)
    const arr = populararr.slice(0, arrlength);
    console.log(arr);
  return (
    <>
    <p className='addcreatorheading'> Campaigns Management</p>
    <p className='pendingcampiagnsubtittle'> Pending </p>
    <div className="popularsuparmaindiv">

    {/* <div className="popularmaindiv"> */}
        
    <div className="popularcarddiv">
        {
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
                    bordertopcolor={'#FFBE0B'}
                    status={'Pending'}
                  
                  />
                );
            })
        }
        {/* <Popularcard img ='kll' />
        <Popularcard/>
    <Popularcard/> */}
    </div>
    {/* </div> */}
    
<center>

    <button onClick={() => setarrlength(arrlength+3)} className="popmoreproj">more project</button>
</center>
    </div>
    </>
  )
}

export default Campaignscard