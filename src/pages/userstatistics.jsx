import React from 'react'
import Dashboard from '../components/images/sidebarlayout'
// import Addcreatorpagecontent from '../components/images/addcreatorpagecontent'
// import Addinvestorpagecontent from '../components/images/addinvestor'
// import Investoranalytcs from '../components/images/investoranalytics'
// import Completetransaction from '../components/images/completetransaction'
import Pendingtransaction from '../components/images/pendingtransaction'
import Userstatistics from '../components/images/userstatisticspagecontent'
// import Homechartsandall from '../components/images/homechartsandall'

const Userstatisticspage = () => {
  return (
    <div>
<Dashboard content={<Userstatistics/>}/>

    </div>
  )
}

export default Userstatisticspage