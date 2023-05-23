


import { Divider } from 'antd'
import '../../dashboard.css'
import { Link } from 'react-router-dom'
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
        <Link to={'/userstatistics'} style={{color:'#140F26',fontSize:'12px',cursor:'pointer',textDecoration:'none'}}>View All</Link>
    </div>

    </div>
 )
}

export default Dashboardtotaluser