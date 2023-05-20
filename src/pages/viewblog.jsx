

import React from 'react'
import Dashboard from '../components/images/sidebarlayout'
import '../blog.css'
// import Addcreatorpagecontent from '../components/images/addcreatorpagecontent'
// import Homechartsandall from '../components/images/homechartsandall'
import Viewblogspagecontent from '../components/images/viewblogspagecontent'

const Viewblogs = () => {
  return (
    <div>
<Dashboard content={<Viewblogspagecontent/>}/>

    </div>
  )
}

export default Viewblogs