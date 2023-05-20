




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
// import Blogpagecontent from "../components/images/blogpagecontent";
import Blogpage from "./blogpage";
import Viewblogs from "./viewblog";
import Platformsetting from "./platformsetting";
// import Addcreator from "./addcreator";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Dashboardpage/>}/>
        <Route path={'/addcreator'} element={<Addcreator/>}/>
        <Route path={'/viewcreator'} element={<Viewcreator/>}/>
        <Route path={'/addinvestor'} element={<Addinvestor/>}/>
        <Route path={'/viewinvestor'} element={<Viewinvestor/>}/>
        <Route path={'/pendingcampaign'} element={<Pendingcampaign/>}/>
        <Route path={'/activcampaign'} element={<Activecampaign/>}/>
        <Route path={'/completecampaign'} element={<Completecampaign/>}/>
        <Route path={'/campaigndetails'} element={<Campaigndetailspage/>}/>
        <Route path={'/blog'} element={<Blogpage/>}/>
        <Route path={'/viewblogs'} element={<Viewblogs/>}/>
        <Route path={'/blogdetails'} element={<Blogfullcontentpage/>}/>
        <Route path={'/platformsetting'} element={<Platformsetting/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router