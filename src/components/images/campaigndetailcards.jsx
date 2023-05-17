

import React from 'react'

const Campaigndetailcards = ({graphimg,bordercolour}) => {
  return (
    <div>
  <div className='dashboardcardtopdiv'>
{/* <p>hi</p> */}
<div className='dashboardcardtopone' style={{borderTop:bordercolour , display:'flex' , justifyContent:'space-between', flexWrap:'wrap'}}>
    <div>

    <p className='dashboardcardtoponebigtext'>210</p>
    <p className='dashboardcardtoponesmalltext'>Total Tasks</p>
    </div>
    {/* <div className='graphimgtopboxes' >

    <img src={graphimg} style={{width:'100%'}}/>
    </div> */}
</div>
        </div>

    </div>
  )
}

export default Campaigndetailcards