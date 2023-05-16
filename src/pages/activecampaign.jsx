






import React from 'react'
import Dashboard from '../components/images/sidebarlayout'
// import Addcreatorpagecontent from '../components/images/addcreatorpagecontent'
// import Addinvestorpagecontent from '../components/images/addinvestor'
import Campaignscard from '../components/images/campaignscard'
import Activcampaignscard from '../components/images/activcampaign'
// import Homechartsandall from '../components/images/homechartsandall'

const Activecampaign = () => {
  return (
    <div>
<Dashboard content={<Activcampaignscard/>}/>

    </div>
  )
}

export default Activecampaign