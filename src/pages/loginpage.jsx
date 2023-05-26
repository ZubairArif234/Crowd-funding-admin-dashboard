

// import React  from 'react'
import { useFormik } from 'formik'
import { loginscheemas } from '../scheemas/login'
import '../login.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import logo from '../components/images/logo.png'
const initialValues = {
    email: '',
    password: '',
  
  
  }


const Loginpage = () => {


  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setpassword] = useState('123456');

  const handleChangefun = (event) => {
    setEmail(event.target.value);
  };
  const handleChangefunpas = (event) => {
    setpassword(event.target.value);
  };
  const handleSubmitfunpas = () => {
    navigate('/home')
  };
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: loginscheemas,
        onSubmit: (values, { resetForm }) => {
          console.log(values);
          if(values){
            navigate('/home')
          }
          resetForm(); // Reset the form values
        },
      });
  return (
    <div className='loginmaindiv'>

    <div className='logindivouter'>
      <div className='logindiv'>
        <div style={{ display:'flex' , justifyContent:'center' }}>


<img src={logo} style={{margin:'0 auto'}}/>
        </div>
        <p className='loginheading'>LOGIN</p>
        {/* <form onSubmit={handleSubmit}> */}

        <label className='addcreatorlabel' htmlFor='email'>Email </label>
            <br />
            <input className='addcreatorinput' onChange={handleChangefun} onBlur={handleBlur} value={email} name='email' id='email' type='text' placeholder='@gmail.com' />
            {/* {errors.email ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.email}</span> : null} */}
       <br/>
        <label className='addcreatorlabel' htmlFor='password'>Password </label>
            <br />
            <input className='addcreatorinput' type='password' onChange={handleChangefunpas} onBlur={handleBlur} value={password} name='password' id='password'  placeholder='*****' />
            {/* {errors.password ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.password}</span> : null} */}
  <br/>
  <div style={{display:'flex' ,justifyContent:'center'}}>

            <button  style={{margin:'0px',marginTop:'30px', width:'30%' , padding:'5px' , borderRadius:'5px', border:'none' , backgroundColor:"#6100B3" , color:'white', fontFamily:'Rubik' , fontWeight:'400'}} onClick={handleSubmitfunpas} type='submit'>Login</button>
  </div>
        {/* </form> */}
      </div>
    </div>
    </div>
  )
}

export default Loginpage