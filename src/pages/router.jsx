




import { BrowserRouter , Routes , Route } from "react-router-dom";




import React from 'react'
import Addcreator from "./addcreator";
// import Dashboard from '../components/images/sidebarlayout';
import Dashboardpage from "./dashboard";
import Viewcreator from "./viewcreatoe";
import Addinvestor from "./addinvestor";
import Viewinvestor from "./viewinvestor";
import Pendingcampaign from "./pendingcampaign";
import Activecampaign from "./activecampaign";
import Completecampaign from "./completedcampaign";
import Campaigndetailspage from "./campaigndetailspage";
import Blogfullcontentpage from "./blogfullcontentpage";
import Creatoranalyticspage from "./analyticscreator";
// import Investoranalytcs from "../components/images/investoranalytics";
import Investoranalyticspage from "./analyticsinvestor";
// import Completetransaction from "../components/images/completetransaction";
import Completetransactionpage from "./completetransactionpage";
import Pendingtransactionpage from "./pendingtransactionpage";
import Allfrontpageslistpage from "./allfrontpagespage";
import Editallfrontpagescontentlist from "./editcontentofallfrontpages";
// import Userstatistics from "./userstatistics";
import Userstatisticspage from "./userstatistics";
import Campagianstatisticspage from "./campagianstatisticspage";
import Financialreportspage from "./financialreports";
// import Editallfrontpagescontent from "../components/images/editallfrontpagescontent";
// import Blogpagecontent from "../components/images/blogpagecontent";
import Blogpage from "./blogpage";
import Apisettingpage from "./apisettingpage";
import Viewblogs from "./viewblog";
import Platformsetting from "./platformsetting";
import Transactiondisputepage from "./transactiondisputepage";
// import Addcreator from "./addcreator";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Dashboardpage/>}/>
        <Route path={'/addcreator'} element={<Addcreator/>}/>
        <Route path={'/viewcreator'} element={<Viewcreator/>}/>
        <Route path={'/creatoranalytics'} element={<Creatoranalyticspage/>}/>
        <Route path={'/addinvestor'} element={<Addinvestor/>}/>
        <Route path={'/viewinvestor'} element={<Viewinvestor/>}/>
        <Route path={'/investoranalytics'} element={<Investoranalyticspage/>}/>
        <Route path={'/pendingcampaign'} element={<Pendingcampaign/>}/>
        <Route path={'/activcampaign'} element={<Activecampaign/>}/>
        <Route path={'/completecampaign'} element={<Completecampaign/>}/>
        <Route path={'/campaigndetails'} element={<Campaigndetailspage/>}/>
        <Route path={'/completetransaction'} element={<Completetransactionpage/>}/>
        <Route path={'/pendingtransaction'} element={<Pendingtransactionpage/>}/>
        <Route path={'/transactiondispute'} element={<Transactiondisputepage/>}/>
        <Route path={'/blog'} element={<Blogpage/>}/>
        <Route path={'/viewblogs'} element={<Viewblogs/>}/>
        <Route path={'/blogdetails'} element={<Blogfullcontentpage/>}/>
        <Route path={'/userstatistics'} element={<Userstatisticspage/>}/>
        <Route path={'/financialreports'} element={<Financialreportspage/>}/>
        <Route path={'/campaignstatistics'} element={<Campagianstatisticspage/>}/>
        <Route path={'/allfrontpagelist'} element={<Allfrontpageslistpage/>}/>
        <Route path={'/editallfrontpagescontent'} element={<Editallfrontpagescontentlist/>}/>
        <Route path={'/platformsetting'} element={<Platformsetting/>}/>
        <Route path={'/apisettings'} element={<Apisettingpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router