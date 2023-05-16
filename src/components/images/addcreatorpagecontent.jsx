import React from 'react'

import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import '../../addcreator.css'
const Addcreatorpagecontent = () => {
  return (
    <div>
        <p className='addcreatorheading'>Create New Creator</p>

        <form>
            <Row className='addcreatorformrow'>
                <Col lg={6} className='addcreatorformcol'>

<label className='addcreatorlabel'>First Name</label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter First Name'/>

{/* <br/>
                <label className='addcreatorlabel'>Middle Name</label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter Middle Name'/> */}
<br/>
                <label className='addcreatorlabel'>Last Name</label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter Last Name'/>
<br/>
                <label className='addcreatorlabel'>Tittle</label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter Tittle'/>
<br/>
                <label className='addcreatorlabel'>Email</label>
<br/>
<input className='addcreatorinput' type='email' placeholder='Enter Email'/>
<br/>
                <label className='addcreatorlabel'>Password</label>
<br/>
<input className='addcreatorinput' type='email' placeholder='Enter Email'/>
{/* <br/>
                <label className='addcreatorlabel'>Confirm Password</label>
<br/>
<input className='addcreatorinput' type='password' placeholder='Confirm Password'/>
<br/>
                <label className='addcreatorlabel'>Artist/Band Name </label>
<br/>
<input className='addcreatorinput' type='password' placeholder='Enter Artist/Band Name'/> */}

                </Col>

                <Col lg={6}>
                    
                <label className='addcreatorlabel'>Country</label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter Country'/>
{/* <br/>
                <label className='addcreatorlabel'>State</label>
                <br/>
<input className='addcreatorinput' type='text' placeholder='Enter State'/> */}
<br/>
                <label className='addcreatorlabel'>City</label>
                <br/>
<input className='addcreatorinput' type='text' placeholder='Enter City'/>
<br/>
                <label className='addcreatorlabel'>Phone no</label>
<br/>
<input className='addcreatorinput' type='number' placeholder='Enter Phone no'/>
<br/>
                <label className='addcreatorlabel'>Gender</label>
<br/>
<input className='addcreatorinput' type='number' placeholder='Enter Phone no'/>
<br/>
                <label className='addcreatorlabel'>Date of birth</label>
<br/>
<input className='addcreatorinput' type='date' placeholder='Enter Phone no'/>
                </Col>
                <label className='addcreatorlabel'>Description</label>
                <textarea className='addcreatortextarea' placeholder='Description...' cols={20} rows={4}></textarea>
           <button className='addcreatorsubmitbtn'>Submit</button>
            </Row>
        </form>
    </div>
  )
}

export default Addcreatorpagecontent