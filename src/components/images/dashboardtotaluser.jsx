


import { Divider } from 'antd'
import '../../dashboard.css'
const Dashboardtotaluser = () => {
 return(
    <div className='dashboardtotalusermaindiv'>

    <p className='dashboardtotaluseronebigtext'>OVERVIEW</p>
    <Divider/>
    
    <div className='overviewdivone'>
        <p className='overviewtotalone'>121,000</p>
        <p className='dashboardcardtoponesmalltext'>Total Visitors</p>
    </div>
    {/* <Divider/> */}
    <div className='overviewdivone'>
        <p className='overviewtotalone'>121,000</p>
        <p className='dashboardcardtoponesmalltext'>Total Visitors</p>
    </div>
    {/* <Divider/> */}
    <div className='overviewdivone'>
        <p className='overviewtotalone'>121,000</p>
        <p className='dashboardcardtoponesmalltext'>Total Visitors</p>
    </div>
    {/* <Divider/> */}
    <div style={{display:'flex' , justifyContent:'flex-end'}}>
        <p style={{color:'#140F26',fontSize:'12px',cursor:'pointer'}}>View All</p>
    </div>

    </div>
 )
}

export default Dashboardtotaluser