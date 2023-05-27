



import React from 'react'
import '../../platformsetting.css'
import { Col, Row } from 'react-bootstrap'
import graphicon from '../images/bell.png'
import logo from '../images/logo.png'

import Modal from 'react-bootstrap/Modal';

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useFormik } from 'formik'
import { apichangesettings } from '../../scheemas/changeapisettngs'



const initialValues = {
    api1: '',
    api2: '',
    api3: '',
    api4: '',
    api5: '',
    api6: '',
    api7: '',
    api8: '',
    api9: '',
    api10: '',
    api11: '',
    api12: '',

}

const Apisettingpagecontent = () => {


    const [modalShow, setModalShow] = React.useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: apichangesettings,
        onSubmit: (values) => {
            // console.log('kkk');
            console.log('working ', values);
        },

    })

    return (
        <div>
            <div className='platformdetails'>
                <Row>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <p className='addcreatorheading' >Api Settings </p>
                <button onClick={() => setModalShow(true)} style={{ width: '100px', padding: '5px', border: 'none', color: 'white', backgroundColor: '#6100B3' }}>Edit</button>
            </div>
                    <Col lg={6}>
                        {/* <div style={{display:'flex' , alignItems:'center'}}> */}

                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                       
                        <label className='platformfieldskeys'>Paypal Client ID</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                    </Col>
                    <Col lg={6}>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                        <label className='platformfieldskeys'>Stripe public API</label>
                        <br />
                        <p className='addcreatorp'  >
                        llf34345j89jfld/s0-sjk4o047rhjkk97983jkdhksoncu9838
                        </p>
                    </Col>
                </Row>
            </div>


            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Change Settings
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        {/* <Row> */}
                        {/* <Col> */}

                        <label className='platformfieldskeys' htmlFor='api1'>Stripe public API</label>
                        <br />
                        <input value={values.api1} onChange={handleChange} onBlur={handleBlur} name='api1' id='api1' className='addcreatorinput' />
                        {errors.api1 && touched.api1 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api1}</span> : null}
                        {/* <br/> */}
                        <br />
                        <label className='platformfieldskeys' htmlFor='api2'>Paypal Client ID</label>
                        <br />
                        <input className='addcreatorinput' value={values.api2} onChange={handleChange} onBlur={handleBlur} name='api2' id='api2' />
                        {errors.api2 && touched.api2 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api2}</span> : null}
                        {/* <br/> */}
                        <br />
                        <label className='platformfieldskeys' htmlFor='api3'>Stripe public API</label>
                        <br />
                        <input className='addcreatorinput' value={values.api3} onChange={handleChange} onBlur={handleBlur} name='api3' id='api3' />
                        {errors.api3 && touched.api3 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api3}</span> : null}
                        {/* <br/> */}
                        <br />
                        <label className='platformfieldskeys' htmlFor='api4'>Stripe public API</label>
                        <br />
                        <input className='addcreatorinput' value={values.api4} onChange={handleChange} onBlur={handleBlur} name='api4' id='api4' />
                        {errors.api4 && touched.api4 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api4}</span> : null}
                        <br />
                        {/* <br/> */}
                        <label className='platformfieldskeys' htmlFor='api5'>Stripe public API</label>
                        <br />
                        <input value={values.api5} onChange={handleChange} onBlur={handleBlur} name='api5' id='api5' className='addcreatorinput' />
                        {errors.api5 && touched.api5 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api5}</span> : null}
                        <br />
                        <label className='platformfieldskeys' htmlFor='api6'>Stripe public API</label>
                        <br />
                        <input value={values.api6} onChange={handleChange} onBlur={handleBlur} name='api6' id='api6' className='addcreatorinput' />
                        {errors.api6 && touched.api6 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api6}</span> : null}
                        <br />
                        <label className='platformfieldskeys' htmlFor='api7'>Stripe public API</label>
                        <br />
                        <input value={values.api7} onChange={handleChange} onBlur={handleBlur} name='api7' id='api7' className='addcreatorinput' />
                        {errors.api7 && touched.api7 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api7}</span> : null}
                        <br />
                        {/* <br/> */}
                        <label className='platformfieldskeys' htmlFor='api8'>Paypal Client ID</label>
                        <br />
                        <input value={values.api8} onChange={handleChange} onBlur={handleBlur} name='api8' id='api8' className='addcreatorinput' />
                        {errors.api8 && touched.api8 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api8}</span> : null}
                        <br />
                        {/* <br/> */}
                        <label className='platformfieldskeys' htmlFor='api9'>Stripe public API</label>
                        <br />
                        <input value={values.api9} onChange={handleChange} onBlur={handleBlur} name='api9' id='api9' className='addcreatorinput' />
                        {errors.api9 && touched.api9 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api9}</span> : null}
                        <br />
                        {/* <br/> */}
                        <label className='platformfieldskeys' htmlFor='api10'>Stripe public API</label>
                        <br />
                        <input value={values.api10} onChange={handleChange} onBlur={handleBlur} name='api10' id='api10' className='addcreatorinput' />
                        {errors.api10 && touched.api10 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api10}</span> : null}
                        <br />
                        {/* <br/> */}
                        <label className='platformfieldskeys' htmlFor='api11'>Stripe public API</label>
                        <br />
                        <input value={values.api11} onChange={handleChange} onBlur={handleBlur} name='api11' id='api11' className='addcreatorinput' />
                        {errors.api11 && touched.api11 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api11}</span> : null}
                        <br />
                        {/* <br/> */}
                        <label className='platformfieldskeys' htmlFor='api12'>Stripe public API</label>
                        <br />
                        <input value={values.api12} onChange={handleChange} onBlur={handleBlur} name='api12' id='api12' className='addcreatorinput' />
                        {errors.api12 && touched.api12 ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.api12}</span> : null}
                        <br />

                        <div style={{display:'flex', justifyContent:'flex-end'}}>


          <button className='addcreatorsubmitbtn' type='submit'>Save Changes</button>
          </div>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
      </Modal.Footer> */}
            </Modal>

        </div>
    )
}

export default Apisettingpagecontent