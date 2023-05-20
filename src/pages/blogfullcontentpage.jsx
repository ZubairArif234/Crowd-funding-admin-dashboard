import React from 'react'
import { useLocation } from 'react-router-dom';
import Blogfullcontentcomponent from '../components/images/blogfullcontentcomponent';
// import Campaigndetailinnercontent from '../components/images/campaigndetail';
import Dashboard from '../components/images/sidebarlayout'
const Blogfullcontentpage = () => {
  const location = useLocation();
  const { state } = location;

  // Access the passed data
  const { image, topheading,content , catagoriesblog  } = state;

  return (
    <div>
      {/* Render the data */}
      {/* <img src={image} alt="Campaign Image" />
      <h1>{topheading}</h1>
      <p>Campaign Status: {campaignstatus}</p>
      <p>Progress Price 1: {progressprice1}</p>
      <p>Progress Price 2: {progressprice2}</p> */}
      <Dashboard content={<Blogfullcontentcomponent  img={image}  heading={topheading} text={content} catagory={catagoriesblog} /> }/>
    </div>
  );
};

export default Blogfullcontentpage