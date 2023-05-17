  import React from 'react'
  import { useLocation } from 'react-router-dom';
  import Campaigndetailinnercontent from '../components/images/campaigndetail';
  import Dashboard from '../components/images/sidebarlayout'
  const Campaigndetailspage = () => {
    const location = useLocation();
    const { state } = location;
  
    // Access the passed data
    const { image, topheading, campaignstatus, progressprice1, progressprice2 } = state;
  
    return (
      <div>
        {/* Render the data */}
        {/* <img src={image} alt="Campaign Image" />
        <h1>{topheading}</h1>
        <p>Campaign Status: {campaignstatus}</p>
        <p>Progress Price 1: {progressprice1}</p>
        <p>Progress Price 2: {progressprice2}</p> */}
        <Dashboard content={<Campaigndetailinnercontent image={image} heading={topheading} priceone={progressprice1} pricetwo={progressprice2} />}/>
      </div>
    );
  };
  
  export default Campaigndetailspage