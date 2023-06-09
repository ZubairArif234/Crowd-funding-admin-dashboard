



import React, { useState } from 'react';
import '../../pendingcampaign.css'
import { useNavigate } from 'react-router-dom';
import '../../allfrontendpageslist.css'
import { Card , Progress,Button, message, Upload } from 'antd'; 
// import React from 'react'
import  allfrontpagecardsdata  from '../../content';
import Modal from 'react-bootstrap/Modal';
import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// import homethumbnail from './homethumbnail.png'
const { Meta } = Card;
function Allfrontpagescard({heading, description , img , id , seotitle , seodescription,seotag , seokeywords }) {

  const [modalShow, setModalShow] = React.useState(false);
  const [pageName, setPageName] = useState(heading);
  const [pageDescription, setPageDescription] = useState(description);
  console.log(pageName,pageDescription);
  const navigate =useNavigate()



  const handleModalSubmit = (e) => {
    e.preventDefault()
    // Handle the form submission and update the data
    // if
    // allfrontpagecardsdata.map(()=>{
    //   if(allfrontpagecardsdata.find((obj)=> obj.id ==id)){
    //     obj.pageName =pageName
    //     obj.description =pageDescription
    //   }
    // })
    // const idkey = allfrontpagecardsdata.find((obj)=>
    const idkey = allfrontpagecardsdata.find((obj) => {
      if (obj.id == id) {
        obj.pagename = pageName;
        obj.description = pageDescription;
        return true; // Return true to stop further iteration after finding the matching object
      }
    });
    
    console.log(allfrontpagecardsdata);
    console.log(idkey);
    console.log('Page Name:', id);
    console.log('Page Description:', pageDescription);
    // Perform any necessary updates or API calls here

    setModalShow(false); // Close the modal after submitting
  };

  const handlePageNameChange = (e) => {
    setPageName(e.target.value);
  };

  const handlePageDescriptionChange = (e) => {
    setPageDescription(e.target.value);
  };

  const beforeUploadfun = (file) => {
        
    return false; // Proceed with upload
};


const props = {
 
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
   
    {
      uid: '1',
      name: img,
      status: 'done',
      // url: 'http://www.baidu.com/yyy.png',
    },

  ],
};


// const onchangefun = (info) => {
//     if (info.file.status !== 'uploading') {
//         console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//     }

// }

  
    return (
      <>
      <Card
        hoverable
        bordered={false}
        className='pendingcampaigncard'
        style={{
          width: 290,
          borderRadius: "0",
          marginBottom:'20px',
         
          padding:'0px',
          marginLeft:'40px',
          marginTop:'20px',
          
          
        }}
        cover={<img alt="example"style={{borderRadius:'0px'}} src={img} />}
      >
        <div className='pendingtopimgbtn' >
            {/* <p>{status}</p> */}
        </div>
        <p className="allfrontentpageslistcardheadings">{heading}</p>
        <div className="popprogressprice">
            <p style={{fontFamily:'Rubik'}}>{description}</p>
         
          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button className='pendingcampaingcards' style={{width:'40%'}} onClick={() => setModalShow(true)} >
                 Edit Content
            </button>
            {/* <button className='pendingcampaingcards' style={{width:'40%'}}   >
                Edit Content
            </button> */}
          </div>
         
        </div>
      </Card>


      <Modal
     show={modalShow}
     onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Content
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleModalSubmit}>
        <Upload  {...props}beforeUpload={beforeUploadfun} maxCount={1}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
            <label>Page Name</label>
            <br />
            <input
              className="addcreatorinput"
              value={pageName}
              onChange={handlePageNameChange}
            />
            <br />
            <label>Page Description</label>
            <br />
            <input
              className="addcreatorinput"
              value={pageDescription}
              onChange={handlePageDescriptionChange}
            />
            {/* <br /> */}
            <br />
            <label>SEO Title</label>
            <br />
            <input
              className="addcreatorinput"
              value={seotitle}
              onChange={handlePageDescriptionChange}
            />
            {/* <br /> */}
            <br />
            <label>SEO Tag Line</label>
            <br />
            <input
              className="addcreatorinput"
              value={seotag}
              onChange={handlePageDescriptionChange}
            />
            {/* <br /> */}
            <br />
            <label>Meta Description </label>
            <br />
            <input
              className="addcreatorinput"
              value={seodescription}
              onChange={handlePageDescriptionChange}
            />
            {/* <br /> */}
            <br />
            <label>Meta Keywords </label>
            <br />
            <input
              className="addcreatorinput"
              value={seokeywords}
              onChange={handlePageDescriptionChange}
            />
            <br />
            {/* Add other form fields here */}
            <div style={{display:'flex', justifyContent:'flex-end'}}>


<button className='addcreatorsubmitbtn' type='submit'>Save Changes</button>
</div>
          </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
        </>
    );
  }
  
export default Allfrontpagescard;