import React from 'react'

import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Formik, useFormik } from 'formik'
import '../../addcreator.css'
import { addinvestorschemas } from '../../scheemas/addinvestorschemas'



const initialValues = {
  first_name:'',
  middle_name:'',
  last_name:'',
  tittle:'',
  email:'',
  password:'',
  confirm_password:'',
  country:'',
  state:'',
  zip_code:'',
  city:'',
  phone_no:'',
  language:'',
  birthdate:'',
  occupation:'',
  experience:'',
  music:'',
  knowabout:'',
  address:'',
  private_policy:'',
  terms_conditions:'',

}
const Addinvestorpagecontent = () => {


  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: addinvestorschemas,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm(); // Reset the form values
    },
  });
  console.log(Formik)


   const country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
  return (
    <div>
        <p className='addcreatorheading'>Create New Investor</p>

        <form onSubmit={handleSubmit}>
            <Row className='addcreatorformrow'>
                <Col lg={6} className='addcreatorformcol'>

<label className='addcreatorlabel' htmlFor='first_name'>First Name</label>
<br/>
<input className='addcreatorinput'  onChange={handleChange} onBlur={handleBlur} value={values.first_name} name='first_name' id='first_name' type='text' placeholder='Enter First Name'/>
{errors.first_name && touched.first_name ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.first_name}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='middle_name'>Middle Name</label>
<br/>
<input className='addcreatorinput'  onChange={handleChange} onBlur={handleBlur} value={values.middle_name} name='middle_name' id='middle_name' type='text' placeholder='Enter Middle Name'/>
{errors.middle_name && touched.middle_name ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.middle_name}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='last_name'>Last Name</label>
<br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.last_name} name='last_name' id='last_name' type='text' placeholder='Enter Last Name'/>
{errors.last_name && touched.last_name ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.last_name}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='tittle'>Tittle</label>
<br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.tittle} name='tittle' id='tittle' type='text' placeholder='Enter Tittle'/>
{errors.tittle  && touched.tittle ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.tittle}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='email'>Email</label>
<br/>
<input className='addcreatorinput'  onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' id='email' type='email' placeholder='Enter Email'/>
{errors.email && touched.email ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.email}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='password'>Password</label>
<br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' id='password' type='password' placeholder='Enter Password'/>
{errors.password && touched.password ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.password}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='confirm_password'>Confirm Password</label>
<br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} name='confirm_password' id='confirm_password' type='password' placeholder='Confirm Password'/>
{errors.confirm_password && touched.confirm_password ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.confirm_password}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='country'>Country of Residence</label>
<br/>
<select className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.country} name='country' id='country'>
              <option>Select country</option>
              {country_list.map((value, key) => {
                return (
                  <option key={key}>{value}</option>
                  )
                })}
            </select>
                {errors.country && touched.country ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.country}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='state'>State/Province/Region </label>
<br/>
<input className='addcreatorinput'  onChange={handleChange} onBlur={handleBlur} value={values.state} name='state' id='state' type='text' placeholder='State/Province/Region '/>
{errors.state && touched.state ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.state}</span> : null}
{/* <br/>
                <label className='addcreatorlabel'>City </label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter City '/> */}

                </Col>

                <Col lg={6} className='addcreatorformcol'>
                    
                <label className='addcreatorlabel' htmlFor='zip_code'>Postal/ZIP code</label>
<br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.zip_code} name='zip_code' id='zip_code' type='text' placeholder='Postal/ZIP code'/>
{errors.zip_code && touched.zip_code ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.zip_code}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='city'>City</label>
                <br/>
                <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.city} name='city' id='city' type='text' placeholder='Enter City'/>
                {errors.city && touched.city ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.city}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='phone_no'>Phone no</label>
<br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.phone_no} name='phone_no' id='phone_no' type='number' placeholder='Enter Phone no'/>
{errors.phone_no && touched.phone_no ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.phone_no}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='language'>Language Preferred </label>
<br/>
<select className='addcreatorinput'  onChange={handleChange} onBlur={handleBlur} value={values.language} name='language' id='language'>
  <option>Select Language</option>
  <option>English </option>
  <option>Urdu</option>
  <option>French</option>
  <option>Spanish</option>
</select>
{errors.language && touched.language ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.language}</span> : null}
<br/>

                <label className='addcreatorlabel' htmlFor='birthdate'>Date of birth</label>
<br/>
<input className='addcreatorinput'  value={values.birthdate} onChange={handleChange} onBlur={handleBlur} name='birthdate' id='birthdate' type='date' placeholder='Enter Phone no'/>
{errors.birthdate && touched.birthdate ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.birthdate}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='occupation'>Occupation</label>
                <br/>
<input className='addcreatorinput' value={values.occupation} onChange={handleChange} onBlur={handleBlur} name='occupation' id='occupation' type='text' placeholder='Occupation'/>
{errors.occupation && touched.occupation ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.occupation}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='experience'>Investment Experience</label>
<br/>
<select className='addcreatorinput'  onChange={handleChange} onBlur={handleBlur} value={values.experience} name='experience' id='experience'>
  <option>Select </option>
  <option>Novice</option>
  <option>Advanced Beginner</option>
  <option>Competent</option>
  <option>Proficient</option>
  <option> Expert</option>
  {/* <option>Jazz</option> */}
</select>
{errors.experience && touched.experience ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.experience}</span> : null}
<br />

                <label className='addcreatorlabel' htmlFor='music'>Music Genre's</label>
<br/>
<select className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.music} name='music' id='music'>
  <option>Select Music Genre's</option>
  <option>Rock </option>
  <option>POP</option>
  <option>Hip Hop </option>
  <option>Classic</option>
  <option>Blues</option>
  <option>Jazz</option>
</select>
{errors.music && touched.music ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.music}</span> : null}
<br/>
                <label className='addcreatorlabel' htmlFor='knowabout'>How did you here about us ?</label>
                <br/>
<input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.knowabout} name='knowabout' id='knowabout' type='text' placeholder='Occupation'/>
{errors.knowabout && touched.knowabout ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.knowabout}</span> : null}
<br />
               
               
               
               
                </Col>
                <label className='addcreatorlabel' htmlFor='address'>Street Address</label>
                <br/>
                <textarea className='addcreatortextarea' onChange={handleChange} onBlur={handleBlur} value={values.address} name='address' id='address' placeholder='Street Address...' cols={20} rows={4}></textarea>
{errors.address && touched.address ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.address}</span> : null}
                <div>
<input type='checkbox' id='private_policy' onChange={handleChange} onBlur={handleBlur} value={values.private_policy} name='private_policy' style={{marginRight:'10px'}}/>

<label style={{fontFamily:'Rubik' }} htmlFor='private_policy'>Accept Terms and conditions</label>
<br/>
{errors.private_policy && touched.private_policy ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.private_policy}</span> : null}
<br />
<input type='checkbox'onChange={handleChange} onBlur={handleBlur} value={values.terms_conditions} name='terms_conditions' style={{marginRight:'10px'}}/>

<label style={{fontFamily:'Rubik' }} htmlFor='terms_conditions'>Agree to the Privacy Policy</label>
<br />
{errors.terms_conditions && touched.terms_conditions ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.terms_conditions}</span> : null}
</div>
           <button className='addcreatorsubmitbtn'>Submit</button>
            </Row>
        </form>
    </div>
  )
}

export default Addinvestorpagecontent