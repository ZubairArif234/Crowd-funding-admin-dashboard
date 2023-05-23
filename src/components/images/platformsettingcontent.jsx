import React from 'react'
import '../../platformsetting.css'
import { Col, Row } from 'react-bootstrap'
import graphicon from '../images/bell.png'
import logo from '../images/logo.png'

import Modal from 'react-bootstrap/Modal';

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { Formik, useFormik } from 'formik'
import { changesettings } from '../../scheemas/changesettings'



const initialValues = {
    website_icon: '',
    website_logo: '',
    website_name: '',
    website_description: '',
    facebook_link: '',
    instagram_link: '',
    twitter_link: '',
    seo_tittle: '',
    seo_description: '',
    seo_keywords: '',
    private_policy: '',
    terms_conditions: '',

}

const Platformsettingcontent = () => {
    const info = () => {
        message.success('Changes Saved');
    };


    //   console.log(Formik)
    
    const beforeUploadfun = (file) => {
        
        return false; // Proceed with upload
    };


    const onchangefun = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    // beforeUpload: beforeUpload()





    const [modalShow, setModalShow] = React.useState(false);
    
    const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: changesettings,
        onSubmit: (values) => {
            console.log('kkk');
            console.log('working ', values);
        },
        
    })

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <p className='addcreatorheading' >Platform setting  </p>
                <button onClick={() => setModalShow(true)} style={{ width: '100px', padding: '5px', border: 'none', color: 'white', backgroundColor: '#6100B3' }}>Edit</button>
            </div>
            <div className='platformdetails'>
                <Row>
                    <Col lg={6}>
                        {/* <div style={{display:'flex' , alignItems:'center'}}> */}
                        <label className='platformfieldskeys'>Website icon : </label>
                        {/* <br/> */}
                        <img className='settingsvalueicoandtext' src={graphicon} />
                        <br />
                        {/* </div> */}
                        {/* <div style={{display:'flex' , alignItems:'center'}}> */}
                        <label className='platformfieldskeys'>Website logo : </label>
                        <img className='settingsvalueicoandtext' src={logo} width={100} />
                        {/* </div> */}
                        {/* <div style={{display:'flex' , alignItems:'center'}}> */}
                        <br />
                        <label className='platformfieldskeys'>Website Name  </label>
                        {/* <br/> */}
                        <input className='addcreatorinput' value={'Crowd funding'} readOnly/>
                        <br />

                        {/* </div> */}
                        {/* <div style={{display:'flex' , alignItems:'center'}}> */}
                        <label className='platformfieldskeys'>Website Description  </label>
                        {/* <br/> */}
                        <input className='addcreatorinput' value={'Crowdfunding is the practice of funding a project or venture by raising money from a large'} readOnly/>
                        {/* <p className='settingsvaluetext'>Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet. Crowdfunding is a form of crowdsourcing and alternative finance. </p> */}
                        <br />
                        <label className='platformfieldskeys'>Facebook Link</label>
                        <input className='addcreatorinput' value={'https://www.facebook.com/'} readOnly/>
                        {/* <p className='settingsvaluetext'>

                            <a className='settingsvaluetextlinks' href='https://www.facebook.com/'>https://www.facebook.com/</a>
                        </p> */}
                        {/* <br/> */}
                        <label className='platformfieldskeys'>Instagram Link</label>
                        {/* <p className='settingsvaluetext'>

                            <a className='settingsvaluetextlinks' href='https://www.facebook.com/'>https://www.facebook.com/</a>
                        </p> */}
                        <input className='addcreatorinput' value={'https://www.facebook.com/'} readOnly/>
                        <label className='platformfieldskeys'>Twitter Link</label>
                        {/* <p className='settingsvaluetext'> */}

                        <input className='addcreatorinput' value={'https://www.facebook.com/'} readOnly/>
                            {/* <a className='settingsvaluetextlinks' href='https://www.facebook.com/'>https://www.facebook.com/</a> */}
                        {/* </p> */}


                        {/* </div> */}
                    </Col>
                    <Col lg={6}>
                        <label className='platformfieldskeys'>SEO Tittle</label>
                        {/* <p className='settingsvaluetext'>
                            Zubair arif
                            <a href='https://www.facebook.com/'>https://www.facebook.com/</a>
                        </p> */}
                        <input className='addcreatorinput' value={' Zubair arif'} readOnly/>
                        <label className='platformfieldskeys'>SEO Description</label>
                        {/* <p className='settingsvaluetext'>
                            A passionate developer and Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet. Crowdfunding is a form of crowdsourcing and alternative finance.
                            <a href='https://www.facebook.com/'>https://www.facebook.com/</a>
                        </p> */}
                        <input className='addcreatorinput' value={' A passionate developer and Crowdfunding is the practice of funding a project or venture by raising money '} readOnly/>
                        <label className='platformfieldskeys'>SEO Keyword</label>
                        {/* <p className='settingsvaluetext'>
                            React , Javascript , Passionate

                        </p> */}
                        <input className='addcreatorinput' value={' React , Javascript , Passionate'} readOnly/>
                        <label className='platformfieldskeys'>Private policy URL</label>
                        {/* <p className='settingsvaluetext'>

                            <a className='settingsvaluetextlinks' href='https://www.facebook.com/'>https://www.facebook.com/</a>
                        </p> */}
                        <input className='addcreatorinput' value={'https://www.facebook.com/'} readOnly/>
                        <label className='platformfieldskeys'>Terms and Condition URL</label>
                        {/* <p className='settingsvaluetext'>

                            <a className='settingsvaluetextlinks' href='https://www.facebook.com/'>https://www.facebook.com/</a>
                        </p> */}
                        <input className='addcreatorinput' value={'https://www.facebook.com/'} readOnly/>

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

                        <label className='addcreatorlabel'>Website Icon :</label>
                        <br />
                        <Upload onChange={onchangefun} beforeUpload={beforeUploadfun} maxCount={1}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                        <label className='addcreatorlabel'>Website Logo :</label>
                        <br />
                        <Upload onChange={onchangefun} beforeUpload={beforeUploadfun} maxCount={1}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                        <label className='addcreatorlabel' htmlFor='website_name'> Website Name</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.website_name} name='website_name' id='website_name' className='addcreatorinput' />
                        {errors.website_name && touched.website_name ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.website_name}</span> : null}
                        <br />
                        <label className='addcreatorlabel' htmlFor='website_description'>Website Description :</label>
                        <br />
                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.website_description} name='website_description' id='website_description' placeholder='Website decription' rows={5} col={50} className='editsettingsfieldstextarea'>

                        </textarea>
                        {errors.website_description && touched.website_description ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.website_description}</span> : null}
                        <br />
                        <label className='addcreatorlabel' htmlFor='facebook_link'>Facebook Link</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.facebook_link} name='facebook_link' id='facebook_link' className='addcreatorinput' />
                        <br />
                        <label className='addcreatorlabel' htmlFor='instagram_link'>Instagram Link</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.instagram_link} name='instagram_link' id='instagram_link' className='addcreatorinput' />
                        <br />
                        <label className='addcreatorlabel' htmlFor='twitter_link'>Twitter Link</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.twitter_link} name='twitter_link' id='twitter_link' className='addcreatorinput' />
                        <br />
                        {/* </Col> */}
                        {/* <Col> */}
                        <label className='addcreatorlabel' htmlFor='seo_tittle'>SEO Tittle :</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.seo_tittle} name='seo_tittle' id='seo_tittle' className='addcreatorinput' />
                        {errors.seo_tittle && touched.seo_tittle ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.seo_tittle}</span> : null}
                        <br />

                        <label className='addcreatorlabel' htmlFor='seo_description'>SEO Description :</label>
                        <br />
                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.seo_description} name='seo_description' id='seo_description' placeholder='Website decription' rows={5} col={50} className='editsettingsfieldstextarea'>

                        </textarea>
                        {errors.seo_description && touched.seo_description ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.seo_description}</span> : null}
                        <br />
                        <label className='addcreatorlabel' htmlFor='seo_keywords'>SEO Keywords :</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.seo_keywords} name='seo_keywords' id='seo_keywords' className='addcreatorinput' />
                        {errors.seo_keywords && touched.seo_keywords ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.seo_keywords}</span> : null}
                        <br />
                        <label className='addcreatorlabel' htmlFor='private_policy'>Privacy Policy URL</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.private_policy} name='private_policy' id='private_policy' className='addcreatorinput' />
                        {errors.private_policy && touched.private_policy ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.private_policy}</span> : null}
                        <br />
                        <label className='addcreatorlabel' htmlFor='terms_conditions'>Terms and Condition URL</label>
                        <br />
                        <input onChange={handleChange} onBlur={handleBlur} value={values.terms_conditions} name='terms_conditions' id='terms_conditions' className='addcreatorinput' />
                        {errors.terms_conditions && touched.terms_conditions ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.terms_conditions}</span> : null}


                        <button className='editplatformsettingsbtn' type='submit'>Save Changes</button>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
      </Modal.Footer> */}
            </Modal>

        </div>
    )
}

export default Platformsettingcontent