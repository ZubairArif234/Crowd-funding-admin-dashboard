






import React from 'react'
import { useState } from "react";
import populararr from '../../pages/data';
import Popularcard from './layoutofcampaigncard';
import { Input, Space } from 'antd';

const Compcampaignscard = () => {

    const [arrlength , setarrlength] = useState(8)
    const [searchvalue , setsearchvalue] = useState('')
    const arr = populararr.slice(0, arrlength);
    console.log(arr);
    const { Search } = Input;
    const onSearch = (value) =>
    // const lowervalue = value.tolowercase()
    setsearchvalue()
    // console.log(value);
  return (
    <>
    {/* <div style={{display:'flex'}}> */}
{/* <div> */}
       
{/* </div> */}
{/* <> */}

{/* </> */}
    
      {/* </div> */}
    <div className="popularsuparmaindiv">
        <p className='addcreatorheading'> Campaigns Management</p>
        <p className='pendingcampiagnsubtittle' style={{marginLeft:'0px'}}> Completed </p>

    {/* <div className="popularmaindiv"> */}
        
      {/* <div style={{display:'flex' , justifyContent:'flex-end'}}>


    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      style={{width:'50%', }}
      />
      </div> */}
    <div className="popularcarddiv">
        {
            arr.filter((a) => a.heading == searchvalue || searchvalue === '').map((x) => {
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
                    bordertopcolor={'#14CC26'}
                    status={'Completed'}
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

export default Compcampaignscard