

import '../../dashboard.css'
const Smallcard = ({bordercolour , graphimg}) =>{
    return(
        <div className='dashboardcardtopdiv'>
{/* <p>hi</p> */}
<div className='dashboardcardtopone' style={{borderTop:bordercolour , display:'flex' , justifyContent:'space-between', flexWrap:'wrap'}}>
    <div>

    <p className='dashboardcardtoponesmalltext'>Fund Raised</p>
    <p className='dashboardcardtoponebigtext'>$1,512</p>
    </div>
    <div className='graphimgtopboxes' >

    <img src={graphimg} style={{width:'100%'}}/>
    </div>
</div>
        </div>
    )
}


export default Smallcard