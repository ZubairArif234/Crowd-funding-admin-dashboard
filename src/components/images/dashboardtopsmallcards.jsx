

import '../../dashboard.css'
const Smallcard = ({bordercolour}) =>{
    return(
        <div className='dashboardcardtopdiv'>
{/* <p>hi</p> */}
<div className='dashboardcardtopone' style={{borderTop:bordercolour}}>
    <p className='dashboardcardtoponesmalltext'>Fund Raised</p>
    <p className='dashboardcardtoponebigtext'>$1,512</p>
</div>
        </div>
    )
}


export default Smallcard