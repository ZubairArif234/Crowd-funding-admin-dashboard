// const { Header, Sider, Content } = Layout;
// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout style={{height:'100vh'}}>
//       <Sider  trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo" />
//         {/* <div style={{backgroundColor:'white'}}> */}

//         {/* <img src={logo} width={200} height={50} style={{margin:'10px 0px'}} /> */}
//         {/* </div> */}
//         {/* <Menu
//           theme="dark"
//           style={{backgroundColor:'#140F26'}}
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: 'nav 1',
//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'nav 2',
//             },
//             {
//               key: '3',
//               icon: <UploadOutlined />,
//               label: 'nav 3',
//             },
//           ]}
//         /> */}
//         {/* <Sidemenu/> */}
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//           }}
//         >
//           <div className='allsmallcardtopdashboard'>
//             <Smallcard bordercolour='3px solid darkgreen'/>
//             <Smallcard bordercolour='3px solid orangered'/>
//             <Smallcard bordercolour='3px solid #3A6FF8'/>
//             <Smallcard bordercolour='3px solid yellow'/>
//           </div>
//           {/* <div>
//             <Dashboardtotaluser/>
//           </div> */}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default Dashboard;

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "./profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Linechart from "./chartdashboardline";
import BarChart from "./barchatdashboard";
import logo from '../images/logo.png'
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
import "../../dashboard.css";
import {
  MenuOutlined,
  // MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  BellOutlined,
  VideoCameraOutlined,
  DownOutlined,
  //   MenuUnfoldOutlined,
} from "@ant-design/icons";
import logobacked from "../images/logo.png";
import bell from "./bell.png";
import { Button, Layout, Menu, theme, Dropdown, Space } from "antd";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
// import Sidemenu from './sidebarmenu';
// import Smallcard from './dashboardtopsmallcards';
// import Dashboardtotaluser from './dashboardtotaluser';
// import Navbarcrowd from './navbar';
// import graphbluesmall from './graphbluesmall.png';
// import graphgreensmall from './graphgreensmall.png';
// import graphorangesmall from './graphorangesmall.png';
// import graphyellowsmall from './graphyellowsmall.png';
import { useNavigate, Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const { Header, Sider, Content } = Layout;
const Dashboard = ({ content }) => {
  const [accordianopenkey, setaccordianopenkey] = useState("");
  console.log(window.location.pathname);
  useEffect(() => {
    if (
      window.location.pathname === "/addcreator" ||
      window.location.pathname === "/viewcreator" ||
      window.location.pathname === "/creatoranalytics"
    ) {
      setaccordianopenkey("0");
    } else if (
      window.location.pathname === "/addinvestor" ||
      window.location.pathname === "/viewinvestor" ||
      window.location.pathname === "/investoranalytics"
    ) {
      setaccordianopenkey("1");
    } else if (
      window.location.pathname === "/pendingcampaign" ||
      window.location.pathname === "/activcampaign" ||
      window.location.pathname === "/completecampaign" ||
      window.location.pathname === "/campaigndetails"
    ) {
      setaccordianopenkey("2");
    } else if (
      window.location.pathname === "/completetransaction" ||
      window.location.pathname === "/pendingtransaction" ||
      window.location.pathname === "/transactiondispute"
    ) {
      setaccordianopenkey("3");
    } else if (
      window.location.pathname === "/userstatistics" ||
      window.location.pathname === "/campaignstatistics" ||
      window.location.pathname === "/financialreports"
    ) {
      setaccordianopenkey("4");
    } else if (window.location.pathname === "/allfrontpagelist") {
      setaccordianopenkey("5");
    } else if (
      window.location.pathname === "/blog" ||
      window.location.pathname === "/viewblogs"
    ) {
      setaccordianopenkey("6");
    } else if (
      window.location.pathname === "/platformsetting" ||
      window.location.pathname === "/apisettings"
    ) {
      setaccordianopenkey("7");
    }
  }, []);

  const navigate = useNavigate();
  const items = [
    {
      label: (
        <div style={{ display: "flex" }}>
          <img
            src={profile}
            width={40}
            height={40}
            style={{ marginRight: "10px", borderRadius: "20PX" }}
          />
          <div>
            <p
              style={{
                lineHeight: "2px",
                marginTop: "10px",
                color: "#5D5D5D",
                fontWeight: "500",
              }}
            >
              Adam Gill
            </p>
            <p
              style={{
                marginTop: "0px",
                lineHeight: "2px",
                fontSize: "12px",
                color: "#5D5D5D",
              }}
            >
              adamgill@abc.com
            </p>
          </div>
        </div>
        // <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        //   1st menu item
        // </a>
      ),
      key: "0",
    },

    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", lineHeight: "10px" }}
        >
          <svg
            style={{ marginRight: "20px", marginLeft: "10px" }}
            width="20"
            height="20"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8734 8.36321L11.6198 8.20867C11.3181 8.02515 11.1378 7.69572 11.1378 7.32817C11.1378 6.96061 11.3181 6.63118 11.6198 6.44766L11.8734 6.29312C12.5656 5.87117 12.8023 4.93983 12.4027 4.2098L11.9206 3.3293C11.522 2.6008 10.6355 2.35068 9.94518 2.77111L9.69162 2.92514C9.38986 3.10917 9.0288 3.10917 8.72752 2.92514C8.42575 2.74111 8.24546 2.41219 8.24546 2.04464V1.73606C8.24546 0.895208 7.59662 0.210938 6.79931 0.210938H5.8352C5.03789 0.210938 4.38905 0.895208 4.38905 1.73606V2.04515C4.38905 2.4127 4.20876 2.74162 3.907 2.92565C3.60523 3.10917 3.24466 3.10968 2.94289 2.92565L2.68933 2.77111C1.99903 2.35068 1.11254 2.6008 0.713401 3.3293L0.231349 4.2098C-0.168272 4.93983 0.0684155 5.87168 0.760642 6.29312L1.01468 6.44766C1.31645 6.63118 1.49674 6.96061 1.49674 7.32817C1.49674 7.69572 1.31645 8.02515 1.01468 8.20867L0.761124 8.36321C0.0688976 8.78465 -0.16779 9.7165 0.231831 10.4465L0.713883 11.327C1.11302 12.0555 1.99952 12.3056 2.68933 11.8852L2.94289 11.7312C3.24466 11.5466 3.60523 11.5477 3.907 11.7312C4.20876 11.9152 4.38905 12.2441 4.38905 12.6117V12.9203C4.38905 13.7611 5.03789 14.4454 5.8352 14.4454H6.79931C7.59662 14.4454 8.24546 13.7611 8.24546 12.9203V12.6112C8.24546 12.2436 8.42575 11.9147 8.72752 11.7307C9.0288 11.5472 9.38986 11.5466 9.69162 11.7307L9.94518 11.8852C10.6355 12.3051 11.522 12.055 11.9206 11.327L12.4027 10.4465C12.8023 9.7165 12.5656 8.78465 11.8734 8.36321ZM6.31726 9.87003C4.98824 9.87003 3.907 8.72975 3.907 7.32817C3.907 5.92658 4.98824 4.7863 6.31726 4.7863C7.64627 4.7863 8.72752 5.92658 8.72752 7.32817C8.72752 8.72975 7.64627 9.87003 6.31726 9.87003Z"
              fill="black"
            />
          </svg>

          <Link
            to={"/platformsetting"}
            style={{
              paddingRight: "10px",
              color: "#5D5D5D",
              textDecoration: "none",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          >
            Setting
          </Link>
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            lineHeight: "10px",
            width: "200px",
          }}
        >
          <svg
            style={{ marginRight: "20px", marginLeft: "10px" }}
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.48053 2.4173C8.4259 2.39718 8.36774 2.38828 8.30958 2.39115C8.25142 2.39401 8.19443 2.40858 8.14203 2.43397C8.08964 2.45937 8.04289 2.49506 8.00461 2.53895C7.9663 2.58282 7.93727 2.63396 7.91921 2.68933C7.90113 2.74469 7.89442 2.80313 7.89946 2.86114C7.90451 2.91915 7.92118 2.97555 7.94853 3.02698C7.97587 3.0784 8.01329 3.12376 8.05856 3.16038C8.10384 3.19701 8.15604 3.22412 8.21204 3.2401C9.32553 3.60666 10.272 4.35797 10.8816 5.35927C11.4912 6.36056 11.7241 7.54632 11.5385 8.70379C11.3528 9.86129 10.7609 10.9147 9.86871 11.6752C8.97658 12.4357 7.84267 12.8534 6.67038 12.8534C5.49812 12.8534 4.36421 12.4357 3.47208 11.6752C2.57994 10.9147 1.98796 9.86129 1.80233 8.70379C1.61671 7.54632 1.84959 6.36056 2.4592 5.35927C3.0688 4.35797 4.01525 3.60666 5.12873 3.2401C5.18475 3.22412 5.23693 3.19701 5.2822 3.16038C5.3275 3.12376 5.36492 3.0784 5.39226 3.02698C5.41959 2.97555 5.43628 2.91915 5.44133 2.86114C5.44637 2.80313 5.43964 2.74469 5.42158 2.68933C5.40352 2.63396 5.37446 2.58282 5.33618 2.53895C5.2979 2.49506 5.25115 2.45937 5.19875 2.43397C5.14636 2.40858 5.08937 2.39401 5.03121 2.39115C4.97303 2.38828 4.91489 2.39718 4.86024 2.4173C3.55077 2.84776 2.43757 3.73081 1.72038 4.90795C1.0032 6.0851 0.728994 7.4793 0.946969 8.84037C1.16494 10.2014 1.86083 11.4403 2.90975 12.3346C3.95868 13.2289 5.29197 13.7201 6.67038 13.7201C8.0488 13.7201 9.38211 13.2289 10.431 12.3346C11.48 11.4403 12.1758 10.2014 12.3938 8.84037C12.6118 7.4793 12.3376 6.0851 11.6204 4.90795C10.9032 3.73081 9.79 2.84776 8.48053 2.4173Z"
              fill="black"
            />
            <path
              d="M6.67035 5.72108C6.7852 5.72108 6.89534 5.67546 6.97656 5.59424C7.05778 5.51302 7.1034 5.40287 7.1034 5.28803V1.16108C7.1034 1.04623 7.05778 0.936077 6.97656 0.854865C6.89534 0.773651 6.7852 0.728027 6.67035 0.728027C6.55551 0.728027 6.44536 0.773651 6.36414 0.854865C6.28293 0.936077 6.2373 1.04623 6.2373 1.16108V5.28803C6.2373 5.40287 6.28293 5.51302 6.36414 5.59424C6.44536 5.67546 6.55551 5.72108 6.67035 5.72108Z"
              fill="black"
            />
          </svg>
          <Link
            to={"/"}
            style={{
              padding: "10px",
              paddingRight: "10px",
              color: "#5D5D5D",
              textDecoration: "none",
            }}
          >
            Logout
          </Link>
        </div>
      ),
      key: "2",
      // disabled: true,
    },
  ];

  const menu2 = [
    {
      key: "1",
      label: (
       <div>
        <p>Item one</p>
       </div>

      ),
    }
   
  ];

  const App = () => (
    <Dropdown
      menu={{
        items,
      }}
    >
      <div>
        <img
          src={profile}
          width={40}
          height={40}
          style={{ borderRadius: "20px", marginRight: "10px" }}
        />
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Admin Ali
            <DownOutlined />
          </Space>
        </a>
      </div>
    </Dropdown>
  );
  const [fulscreen, setfulscreen] = useState(false);
  const openFullScreen = () => {
    const element = document.documentElement; // Get the document's root element
    if (!fulscreen) {
      // Enter full-screen mode
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setfulscreen(!fulscreen); // Toggle the full-screen state
  };

  // const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const handleMenuOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const itemstwo = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <Layout style={{ height: "100%" }}>
      <Offcanvas show={show} onHide={handleClose} style={{ width: "300px" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={logo}
              width={"90%"}
              height={45}
              style={{ margin: "10px 10px" }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="accordiontoplinkdiv">
            <svg
              width="25"
              height="25"
              style={{ marginLeft: "10px" }}
              className="accordianlinks"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 9.33317V23.3332C3.5 23.6426 3.62292 23.9393 3.84171 24.1581C4.0605 24.3769 4.35725 24.4998 4.66667 24.4998H10.5C10.8094 24.4998 11.1062 24.3769 11.325 24.1581C11.5437 23.9393 11.6667 23.6426 11.6667 23.3332V15.1665H16.3333V23.3332C16.3333 23.6426 16.4562 23.9393 16.675 24.1581C16.8938 24.3769 17.1906 24.4998 17.5 24.4998H23.3333C23.6428 24.4998 23.9395 24.3769 24.1583 24.1581C24.3771 23.9393 24.5 23.6426 24.5 23.3332V9.33317C24.5 9.15205 24.4578 8.97342 24.3768 8.81142C24.2958 8.64943 24.1782 8.50851 24.0333 8.39984L14.7 1.39984C14.4981 1.24838 14.2524 1.1665 14 1.1665C13.7476 1.1665 13.5019 1.24838 13.3 1.39984L3.96667 8.39984C3.82177 8.50851 3.70417 8.64943 3.62317 8.81142C3.54217 8.97342 3.5 9.15205 3.5 9.33317ZM5.83333 9.91651L14 3.7915L22.1667 9.91651V22.1665H18.6667V13.9998C18.6667 13.6904 18.5437 13.3937 18.325 13.1749C18.1062 12.9561 17.8094 12.8332 17.5 12.8332H10.5C10.1906 12.8332 9.89383 12.9561 9.67504 13.1749C9.45625 13.3937 9.33333 13.6904 9.33333 13.9998V22.1665H5.83333V9.91651Z"
                fill="#4B4C5E"
              />
            </svg>

            <Link
              className={
                window.location.pathname === "/home"
                  ? "activaccordianlink"
                  : "accordianlinkstop"
              }
              to={"/home"}
            >
              Dashboard
            </Link>
          </div>
          <Accordion eventKey="0" flush defaultActiveKey={accordianopenkey}>
            <Accordion.Item eventKey="0" className="acccordiannavigation">
              <Accordion.Header>
                {" "}
                <svg
                  width="27"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 27 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6241 13.6991V16.1537L19.6255 17.3786V17.3799V20.2781C19.6255 20.9569 20.1803 21.503 20.8554 21.503H24.9793C25.6543 21.503 26.2091 20.9569 26.2091 20.2781V17.3786C26.2091 16.6999 25.6543 16.1537 24.9793 16.1537H24.2065V13.4287C24.2065 12.7944 23.946 12.2171 23.528 11.8019C23.1101 11.3868 22.5303 11.1295 21.8949 11.1295H14.6377V5.84926H15.4065C16.0815 5.84926 16.6363 5.30314 16.6363 4.62438V1.72488C16.6363 1.04612 16.0815 0.5 15.4065 0.5H11.2826C10.6075 0.5 10.0527 1.04612 10.0527 1.72488V4.62438C10.0527 5.30314 10.6075 5.84926 11.2826 5.84926H12.0513V11.1295H4.79413C4.15639 11.1295 3.57874 11.3871 3.161 11.8019C2.74298 12.2171 2.48252 12.7944 2.48252 13.4287V16.1537H1.72987C1.05484 16.1537 0.5 16.6999 0.5 17.3786V20.2781C0.5 20.9569 1.05484 21.503 1.72987 21.503H5.85376C6.52879 21.503 7.08363 20.9569 7.08363 20.2781V17.3786C7.08363 16.6999 6.52879 16.1537 5.85376 16.1537H5.06291V13.6991H12.0493V16.1537H11.2806C10.6055 16.1537 10.0507 16.6999 10.0507 17.3786V20.2781C10.0507 20.9569 10.6055 21.503 11.2806 21.503H15.4044C16.0795 21.503 16.6343 20.9569 16.6343 20.2781V17.3786C16.6343 16.6999 16.0795 16.1537 15.4044 16.1537H14.6357V13.6991H21.6241Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                  />
                </svg>
                Creator Management
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/addcreator"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/addcreator"}
                >
                  Add Creator
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/viewcreator"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/viewcreator"}
                >
                  View/Edit Creator
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/creatoranalytics"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/creatoranalytics"}
                >
                  Creator Analytics
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                <svg
                  width="29"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 29 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.44213 3.23025L5.46829 10.3437C6.08649 10.5563 6.63614 10.921 7.12075 11.2425C7.13235 11.2502 7.14392 11.2579 7.15546 11.2655C7.70314 11.6288 8.19396 11.9518 8.75401 12.1585L8.75409 12.1585C10.323 12.7378 12.1849 12.558 14.0692 12.3663L14.1165 12.831L14.0692 12.3663C15.6486 12.2057 16.9654 12.2179 18.4438 12.2315C18.5991 12.233 18.7562 12.2344 18.9156 12.2357L18.9952 12.2363C19.5041 12.2167 19.8877 12.009 20.123 11.7275L5.44213 3.23025ZM5.44213 3.23025C8.09217 2.97883 9.96878 2.17357 11.5134 1.51075C12.1149 1.25267 12.666 1.01618 13.1929 0.842385C14.1804 0.516638 15.1308 0.377901 16.2805 0.629453C17.4458 0.884401 18.8559 1.54912 20.7366 2.90927C21.0964 3.17895 21.3206 3.34868 21.4444 3.49987M5.44213 3.23025L21.4444 3.49987M21.4444 3.49987L21.2774 3.55046C21.2774 3.55046 21.2774 3.55046 21.2773 3.55047C21.0113 3.63105 20.7339 3.70764 20.4986 3.77256L20.4986 3.77257L20.4839 3.77662C20.2126 3.85147 19.9939 3.91183 19.7532 4.0093C19.5073 4.10889 19.2503 4.242 18.881 4.45652L18.8809 4.45655C18.5817 4.63039 18.4065 4.78077 18.2927 4.87853L18.2927 4.87854C18.0573 5.08083 17.5851 5.15262 16.8384 4.82285C16.4207 4.63835 16.1718 4.43892 15.9078 4.22617C15.9078 4.22617 15.9078 4.22617 15.9078 4.22617L15.8971 4.21755C15.7844 4.12667 15.65 4.01829 15.5118 3.931L15.5118 3.93099C15.2285 3.75198 14.9324 3.85366 14.7937 3.91835C14.6294 3.99496 14.4724 4.11577 14.3342 4.24411C14.0529 4.50537 13.7612 4.88098 13.532 5.2923C13.3046 5.70021 13.1152 6.18511 13.0839 6.66454C13.0516 7.15915 13.1901 7.68713 13.6651 8.05685L13.7116 8.0931L13.7654 8.1175C14.0871 8.26369 14.4604 8.34317 14.8297 8.39446C15.1988 8.44572 15.5987 8.47299 15.9834 8.49923L15.9924 8.49984C15.9924 8.49984 15.9924 8.49984 15.9924 8.49984C16.8022 8.55509 17.7109 8.65826 18.5062 8.93372C19.2993 9.20844 19.9208 9.63338 20.2479 10.295L20.2479 10.295C20.3817 10.5657 20.424 10.8289 20.4001 11.0666L20.8976 11.1165L20.4001 11.0666C20.3751 11.3153 20.2788 11.541 20.123 11.7274L21.4444 3.49987Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                  />
                  <path
                    d="M23.7365 8.61476L23.7282 8.60775L23.7196 8.60107C23.4707 8.4061 23.163 8.26319 22.7898 8.26319C22.599 8.26319 22.3178 8.28906 22.0794 8.47049C21.8058 8.67865 21.7186 8.98501 21.7186 9.26364C21.7186 9.75201 22.0503 10.0225 22.2828 10.1608C22.3998 10.2304 22.5267 10.2883 22.6337 10.3359C22.6619 10.3484 22.689 10.3603 22.7153 10.3719C22.7976 10.4081 22.8724 10.441 22.95 10.4787C23.3993 10.6972 23.7015 10.8721 23.8968 11.0669C24.0639 11.2334 24.1572 11.4182 24.158 11.7149C24.1578 12.3693 23.8141 12.7793 23.2972 12.9533L22.9041 13.0856V13.5003V13.6963H22.669V13.5421V13.0995L22.2416 12.9847C22.031 12.9281 21.7644 12.8078 21.6123 12.6922C21.5538 12.6468 21.5332 12.6171 21.5272 12.6067C21.5257 12.6042 21.525 12.6025 21.5246 12.6017L21.5242 12.6004L21.5238 12.5986C21.5237 12.5975 21.5235 12.5952 21.5235 12.5916C21.5235 12.5917 21.5235 12.5918 21.5235 12.5918C21.5235 12.5918 21.5238 12.5861 21.5277 12.5762C21.5312 12.5671 21.5363 12.5585 21.5416 12.5517C21.5588 12.5602 21.5861 12.5775 21.6257 12.6111L21.6423 12.6251L21.6599 12.6379C22.0524 12.9226 22.4023 12.9627 22.7078 12.9627C23.003 12.9627 23.3264 12.888 23.5911 12.6875C23.8742 12.4732 24.0473 12.1446 24.0473 11.7518C24.0473 11.43 23.9024 11.1746 23.6786 10.9779C23.4872 10.8097 23.2226 10.67 22.9234 10.5322C22.5391 10.3538 22.2081 10.193 21.9654 9.98194C21.7466 9.79167 21.6276 9.58549 21.6276 9.29025C21.6276 8.89284 21.8852 8.46574 22.3161 8.2841L22.669 8.13529V7.75225V7.50101H22.9041V7.72347V8.13361L23.2914 8.26853C23.448 8.32308 23.5974 8.40143 23.73 8.5022L23.7388 8.50893L23.748 8.51531C23.8007 8.55227 23.8211 8.58042 23.828 8.59216C23.8331 8.60089 23.8346 8.60626 23.8346 8.61671C23.8346 8.61656 23.8346 8.61649 23.8346 8.61649C23.8346 8.61648 23.8343 8.6221 23.8305 8.63181C23.8263 8.64254 23.8201 8.6525 23.8136 8.65978C23.8133 8.66013 23.8131 8.66046 23.8128 8.66077C23.8083 8.65987 23.8039 8.65845 23.7991 8.65641C23.7875 8.65159 23.7668 8.64045 23.7365 8.61476Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.15437"
                  />
                  <path
                    d="M0.754679 2.46217L0.754673 2.46218C0.598162 2.62883 0.5 2.8581 0.5 3.10988V10.7875C0.5 11.0392 0.598169 11.2685 0.754677 11.4352C0.916047 11.607 1.13261 11.7069 1.36668 11.7069H3.04964C3.28368 11.7069 3.50021 11.607 3.66158 11.4352C3.81816 11.2684 3.91633 11.0391 3.91633 10.7875V3.10988C3.91633 2.85821 3.81818 2.62892 3.66163 2.46219L0.754679 2.46217ZM0.754679 2.46217C0.916012 2.29038 1.13252 2.19043 1.36668 2.19043H3.04964M0.754679 2.46217L3.04964 2.19043M3.04964 2.19043C3.28377 2.19043 3.50025 2.29037 3.66161 2.46217L3.04964 2.19043ZM0.391174 2.1208L0.391067 2.1207L0.391174 2.1208Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                  />
                  <path
                    d="M19.7878 6.12473C19.4879 6.31732 19.2086 6.54179 18.9542 6.79405C18.9539 6.79435 18.9535 6.79467 18.9532 6.79497L19.7878 6.12473ZM19.7878 6.12473L20.0726 6.5683M19.7878 6.12473L20.0726 6.5683M20.0726 6.5683L19.7878 6.12472C19.7878 6.12468 19.7879 6.12464 19.788 6.12459L19.788 6.12458C20.9716 5.36443 22.3492 5.15585 23.622 5.43312C23.6226 5.43326 23.6233 5.4334 23.6239 5.43354C23.6239 5.43354 23.6239 5.43354 23.6239 5.43354C24.8972 5.71146 26.063 6.47419 26.8228 7.65714C26.8229 7.65721 26.8229 7.65729 26.823 7.65736C27.5831 8.84099 27.7917 10.2186 27.5144 11.4914C27.5143 11.492 27.5142 11.4926 27.514 11.4933C27.514 11.4933 27.514 11.4933 27.514 11.4933C27.2361 12.7666 26.4734 13.9324 25.2904 14.6922C25.2904 14.6923 25.2903 14.6923 25.2902 14.6924L25.3172 14.7345M20.0726 6.5683C21.1327 5.88751 22.3692 5.701 23.5114 5.94982C24.6524 6.19841 25.6986 6.88211 26.3793 7.942C27.0601 9.00204 27.2466 10.2386 26.9978 11.3808C26.7492 12.5218 26.0654 13.568 25.0056 14.2487C23.9456 14.9294 22.709 15.1159 21.5668 14.8671C20.4258 14.6186 19.3798 13.935 18.6991 12.8752L19.0107 13.3607L18.5944 13.6279C19.3409 14.5451 20.3578 15.1441 21.4543 15.3834C21.455 15.3835 21.4556 15.3837 21.4562 15.3838C22.729 15.6611 24.1066 15.4525 25.2902 14.6924L25.3172 14.7345M25.3172 14.7345C24.1237 15.5009 22.7307 15.7109 21.4458 15.4315C21.4452 15.4314 21.4446 15.4312 21.4439 15.4311C20.3361 15.1897 19.3063 14.5833 18.5521 13.655M25.3172 14.7345C25.3173 14.7344 25.3174 14.7344 25.3175 14.7343C26.5114 13.9675 27.2819 12.7881 27.5617 11.5037L27.5617 11.5037C27.5618 11.503 27.562 11.5024 27.5621 11.5017C27.8415 10.2169 27.6315 8.82387 26.8651 7.63032C26.865 7.63025 26.865 7.63017 26.8649 7.6301C26.0982 6.43618 24.9187 5.66569 23.6343 5.38586L23.6343 5.38586C23.6336 5.38572 23.633 5.38558 23.6324 5.38544L23.7448 4.86916M18.5521 13.655L21.3334 15.9478C22.7498 16.2563 24.2847 16.0241 25.6021 15.178C26.9197 14.3318 27.7695 13.0318 28.0784 11.6142C28.3869 10.1978 28.1547 8.66293 27.3086 7.34546C26.4624 6.02785 25.1624 5.178 23.7448 4.86916M18.5521 13.655L18.1058 13.9415L18.5521 13.655ZM23.7448 4.86916C22.3284 4.56061 20.7935 4.79282 19.4761 5.63893C19.1413 5.85393 18.8299 6.10429 18.5467 6.38523L19.7607 6.08265C19.7608 6.0826 19.7609 6.08256 19.7609 6.08251C19.7609 6.08251 19.761 6.0825 19.761 6.0825C20.9545 5.31606 22.3475 5.10606 23.6324 5.38544L23.7448 4.86916ZM18.6989 12.8749L18.2553 13.1598C18.2553 13.1598 18.2553 13.1597 18.2553 13.1597L18.6989 12.8749Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.15437"
                  />
                </svg>
                Investor Management
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/addinvestor"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/addinvestor"}
                >
                  Add Investor
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/viewinvestor"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/viewinvestor"}
                >
                  View/Edit Investor
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/investoranalytics"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/investoranalytics"}
                >
                  Investor Analytics
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <svg
                  width="25"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4H4V10.5H2C1.44772 10.5 1 10.0523 1 9.5V5C1 4.44772 1.44772 4 2 4Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.2"
                  />
                  <path
                    d="M7 11.5V18C7 18.8284 7.67157 19.5 8.5 19.5V19.5C9.32843 19.5 10 18.8284 10 18V16"
                    stroke="#4B4C5E"
                    stroke-width="1.2"
                  />
                  <path
                    d="M21.7022 4.01334L19 3V12L21.8944 10.5528C22.572 10.214 23 9.52148 23 8.76393V5.886C23 5.05231 22.4829 4.30607 21.7022 4.01334Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.2"
                  />
                  <path
                    d="M19.5 13.2092V2.21211C19.5 1.58359 18.927 1.1109 18.31 1.23033L4 4V10.5L18.2501 14.1775C18.8831 14.3408 19.5 13.8629 19.5 13.2092Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.2"
                  />
                </svg>
                Campaign Management
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/pendingcampaign"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/pendingcampaign"}
                >
                  Pending Approval
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/activcampaign"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/activcampaign"}
                >
                  Active Approval{" "}
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/completecampaign"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/completecampaign"}
                >
                  completed Approval
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {" "}
                <svg
                  width="35"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 31 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0989 0.925715L22.0459 4.67638L14.5481 12.5319L10.6011 8.78119L18.0989 0.925715Z"
                    fill="#D9D9D9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.2221 6.44668L15.0143 15.0317L10.4659 10.8065L10.9361 10.1477L14.2673 13.2265L14.3089 13.2657C14.4616 13.4046 14.6632 13.4772 14.8694 13.4676C15.0756 13.4579 15.2696 13.3668 15.4087 13.2142L15.6756 12.9105L16.942 11.5119L22.5338 5.80985L23.2221 6.44668ZM23.5625 10.7232V9.06259C23.5614 9.04874 23.5614 9.0348 23.5625 9.02095C23.5919 8.28615 24.0843 8.04121 24.748 8.2543C24.7841 8.26682 24.818 8.28501 24.8484 8.30819C26.5238 9.62349 28.084 10.9363 29.7471 12.2516L29.7692 12.2737C29.8875 12.3619 29.9782 12.482 30.0307 12.62C30.0832 12.758 30.0953 12.908 30.0656 13.0526C29.996 13.296 29.8446 13.5079 29.6369 13.6527L25.135 17.2973C24.3414 17.9219 23.5136 17.8043 23.5136 16.6556C23.5136 16.1437 23.5136 15.6268 23.5136 15.1149H17.1208L21.3287 10.7061L23.5625 10.7232ZM7.47767 8.09755C7.47767 8.49924 7.51441 8.99401 7.47767 9.3859C7.46934 9.53588 7.44134 9.68411 7.39439 9.82679C7.3146 10.0831 7.14951 10.3043 6.92656 10.4538C6.70777 10.5929 6.45048 10.6589 6.19176 10.6424C6.01439 10.63 5.83961 10.5929 5.6725 10.5322C5.62952 10.5175 5.58776 10.4995 5.54758 10.4783C5.50859 10.4561 5.47097 10.4315 5.43491 10.4048C4.62908 9.7729 3.79385 9.09198 2.95617 8.41351C2.17728 7.77913 1.39594 7.14475 0.526417 6.45403L0.47743 6.40994C0.296126 6.25976 0.154768 6.06707 0.0659392 5.84904L0.0512431 5.80006C-0.00856411 5.60374 -0.016162 5.39522 0.029199 5.19507C0.0743739 5.01224 0.15786 4.8411 0.274134 4.69295C0.379215 4.55435 0.501898 4.43002 0.639087 4.3231C2.15278 3.18415 3.62974 1.85661 5.14344 0.680919C5.47529 0.39562 5.89198 0.227741 6.32892 0.203296C6.49775 0.201559 6.66493 0.236666 6.81879 0.306169C6.97589 0.378086 7.11359 0.486399 7.22049 0.622134C7.43976 0.930861 7.5485 1.30452 7.5291 1.6827V2.75062H13.6255L12.7217 3.69607H7.04413C6.98217 3.69543 6.92094 3.68255 6.86396 3.65817C6.80699 3.63379 6.7554 3.59839 6.71215 3.55401C6.6689 3.50962 6.63485 3.45712 6.61196 3.39954C6.58907 3.34195 6.57779 3.28041 6.57876 3.21844C6.57876 2.86574 6.57876 2.50813 6.57876 2.15543V1.6827C6.59476 1.51607 6.55699 1.34869 6.47099 1.20508C6.45709 1.18697 6.43957 1.17195 6.41955 1.16099C6.39067 1.14993 6.35982 1.14492 6.32892 1.1463C6.10298 1.17195 5.89108 1.26889 5.72393 1.42307L1.22448 5.06525C1.15259 5.11922 1.08832 5.18266 1.03343 5.25385C0.998947 5.29625 0.973897 5.34552 0.959952 5.39836C0.951196 5.43541 0.951196 5.47399 0.959952 5.51103V5.53308C0.993547 5.60863 1.04379 5.67562 1.10691 5.72903C1.9005 6.35116 2.72593 7.01983 3.55626 7.6885C4.38659 8.35718 5.13119 8.96951 6.00561 9.64798C6.08034 9.67173 6.15763 9.68653 6.23585 9.69207C6.29966 9.69825 6.36382 9.68456 6.41955 9.65288C6.46511 9.61998 6.49797 9.57242 6.51262 9.51817C6.53147 9.45688 6.54298 9.39357 6.54692 9.32957V7.61502C6.54877 7.49367 6.59747 7.37773 6.68284 7.29145C6.7682 7.20518 6.88361 7.15524 7.00494 7.1521H9.41755L8.55293 8.05836L8.51864 8.09755H7.47767ZM22.9967 4.22513L14.7914 12.8101L10.243 8.58497L18.4508 0L22.9967 4.22513ZM17.8164 6.03764C17.9108 6.3002 17.9253 6.58487 17.858 6.85566C17.7906 7.12645 17.6445 7.37119 17.4381 7.55894C17.2317 7.74668 16.9742 7.869 16.6983 7.91042C16.4223 7.95185 16.1403 7.91051 15.8879 7.79165C15.6354 7.67279 15.4239 7.48174 15.28 7.24266C15.1361 7.00358 15.0664 6.7272 15.0796 6.44848C15.0928 6.16976 15.1883 5.90122 15.3542 5.6768C15.52 5.45239 15.7486 5.28219 16.0112 5.18772C16.1855 5.12499 16.3705 5.09722 16.5556 5.10599C16.7407 5.11475 16.9222 5.15988 17.0898 5.23881C17.2574 5.31773 17.4079 5.4289 17.5325 5.56596C17.6572 5.70303 17.7536 5.86331 17.8164 6.03764ZM20.9466 5.0579L15.4625 10.6963C15.284 10.5314 15.0474 10.4439 14.8046 10.4531C14.5617 10.4623 14.3324 10.5674 14.1668 10.7453L12.369 9.07729C12.5339 8.89877 12.6214 8.66217 12.6122 8.41931C12.603 8.17645 12.498 7.94713 12.32 7.78158L17.8041 2.12603C17.8925 2.20874 17.9963 2.27312 18.1097 2.31545C18.2231 2.35779 18.3437 2.37724 18.4646 2.37268C18.5856 2.36813 18.7044 2.33966 18.8143 2.28891C18.9241 2.23817 19.0229 2.16616 19.1047 2.07705L20.905 3.7475C20.7396 3.92611 20.6517 4.16293 20.6604 4.40618C20.6691 4.64944 20.7738 4.87935 20.9515 5.04566L20.9466 5.0579Z"
                    fill="#4B4C5E"
                  />
                </svg>
                Transaction Management
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/completetransaction"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/completetransaction"}
                >
                  Completed Transaction{" "}
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/pendingtransaction"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/pendingtransaction"}
                >
                  Pending Transaction{" "}
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/transactiondispute"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/transactiondispute"}
                >
                  Dispute
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                {" "}
                <svg
                  width="25"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.64566 6.14662L4.62665 10.5656L2.98406 9.10553L3.12449 8.94373L4.19683 9.89295L4.57143 10.2245L4.85393 9.81165L8.00679 5.20364L11.3884 10.2407L11.7338 10.7553L12.1074 10.2607L15.4874 5.78456L15.6676 5.92022L11.729 11.1447L8.37692 6.14966L8.01353 5.60816L7.64566 6.14662ZM16.6246 0.558434H2.04164C1.22279 0.558434 0.558434 1.22279 0.558434 2.04164V13.4997C0.558434 14.3192 1.22293 14.9829 2.04164 14.9829H16.6246C17.444 14.9829 18.1079 14.3191 18.1079 13.4997V2.04164C18.1079 1.22293 17.4442 0.558434 16.6246 0.558434Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="0.883132"
                  />
                </svg>
                Report & Analytics
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/userstatistics"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/userstatistics"}
                >
                  User Statistics{" "}
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/campaignstatistics"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/campaignstatistics"}
                >
                  Campaign Statistics{" "}
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/financialreports"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/financialreports"}
                >
                  Financial Reports
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                {" "}
                <svg
                  width="25"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9524 0H2.06075C0.928063 0 0 0.928063 0 2.06168V16.9542C0 18.0859 0.928063 19.014 2.06075 19.014H16.9524C18.086 19.014 19.014 18.086 19.014 16.9542V2.06168C19.014 0.928063 18.0859 0 16.9524 0ZM17.454 17.2457H1.56096V4.27455H17.454V17.2457Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M5.23691 8.6413C6.091 8.6413 6.78339 7.94891 6.78339 7.09482C6.78339 6.24072 6.091 5.54834 5.23691 5.54834C4.38281 5.54834 3.69043 6.24072 3.69043 7.09482C3.69043 7.94891 4.38281 8.6413 5.23691 8.6413Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M14.8588 6.45117H8.0708V7.73959H14.8588V6.45117Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M5.23691 12.4206C6.091 12.4206 6.78339 11.7282 6.78339 10.8741C6.78339 10.02 6.091 9.32764 5.23691 9.32764C4.38281 9.32764 3.69043 10.02 3.69043 10.8741C3.69043 11.7282 4.38281 12.4206 5.23691 12.4206Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M14.8588 10.2305H8.0708V11.518H14.8588V10.2305Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M5.23691 16.2009C6.091 16.2009 6.78339 15.5085 6.78339 14.6544C6.78339 13.8003 6.091 13.1079 5.23691 13.1079C4.38281 13.1079 3.69043 13.8003 3.69043 14.6544C3.69043 15.5085 4.38281 16.2009 5.23691 16.2009Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M14.8588 14.0098H8.0708V15.2973H14.8588V14.0098Z"
                    fill="#4B4C5E"
                  />
                </svg>
                Content Management
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/allfrontpagelist"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/allfrontpagelist"}
                >
                  All Front End Pages List{" "}
                </Link>
                {/* <Link to={'//activcampaign'}>Campaign Statistics </Link>
          <Link to={'/completecampaign'}>Financial Reports</Link> */}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                {" "}
                <svg
                  width="25"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 19V0H19V19H0ZM17.9143 1.08571H1.08571V17.9143H17.9143V1.08571Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M6.24287 16.5571H2.44287V2.44284H6.24287V16.5571Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M11.4001 16.5571H7.6001V2.44284H11.4001V16.5571Z"
                    fill="#4B4C5E"
                  />
                  <path
                    d="M16.5573 16.5571H12.7573V2.44284H16.5573V16.5571Z"
                    fill="#4B4C5E"
                  />
                </svg>
                Blog
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/blog"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/blog"}
                >
                  Add New Blogs
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/viewblogs"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/viewblogs"}
                >
                  View Blogs
                </Link>
                {/* <Link to={'/completecampaign'}>Financial Reports</Link> */}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                {" "}
                <svg
                  width="25"
                  className="accordianlinks"
                  height="25"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.18747 1.94C7.27747 1.398 7.74747 1 8.29747 1H10.8905C11.4405 1 11.9105 1.398 12.0005 1.94L12.2135 3.221C12.2765 3.595 12.5265 3.907 12.8585 4.091C12.9325 4.131 13.0055 4.174 13.0785 4.218C13.4025 4.414 13.7985 4.475 14.1535 4.342L15.3705 3.886C15.6199 3.79221 15.8945 3.78998 16.1453 3.87971C16.3962 3.96945 16.6071 4.14531 16.7405 4.376L18.0365 6.623C18.1695 6.8537 18.2164 7.12413 18.1688 7.38617C18.1212 7.6482 17.9822 7.88485 17.7765 8.054L16.7735 8.881C16.4805 9.121 16.3355 9.494 16.3425 9.873C16.3441 9.95799 16.3441 10.043 16.3425 10.128C16.3355 10.506 16.4805 10.878 16.7725 11.118L17.7775 11.946C18.2015 12.296 18.3115 12.9 18.0375 13.376L16.7395 15.623C16.6063 15.8536 16.3957 16.0296 16.145 16.1195C15.8943 16.2094 15.6199 16.2074 15.3705 16.114L14.1535 15.658C13.7985 15.525 13.4035 15.586 13.0775 15.782C13.005 15.8261 12.9316 15.8688 12.8575 15.91C12.5265 16.093 12.2765 16.405 12.2135 16.779L12.0005 18.059C11.9105 18.602 11.4405 19 10.8905 19H8.29647C7.74647 19 7.27647 18.602 7.18647 18.06L6.97347 16.779C6.91147 16.405 6.66147 16.093 6.32947 15.909C6.25532 15.8681 6.18197 15.8258 6.10947 15.782C5.78447 15.586 5.38947 15.525 5.03347 15.658L3.81647 16.114C3.5672 16.2075 3.29283 16.2096 3.04217 16.1199C2.7915 16.0302 2.58078 15.8545 2.44747 15.624L1.15047 13.377C1.01741 13.1463 0.970515 12.8759 1.01812 12.6138C1.06573 12.3518 1.20476 12.1152 1.41047 11.946L2.41447 11.119C2.70647 10.879 2.85147 10.506 2.84447 10.127C2.8429 10.042 2.8429 9.95699 2.84447 9.872C2.85147 9.494 2.70647 9.122 2.41447 8.882L1.41047 8.054C1.20501 7.88489 1.06614 7.64843 1.01854 7.38662C0.970938 7.12481 1.01768 6.8546 1.15047 6.624L2.44747 4.377C2.58065 4.14614 2.79148 3.97006 3.04238 3.88014C3.29328 3.79021 3.56796 3.79229 3.81747 3.886L5.03347 4.342C5.38947 4.475 5.78447 4.414 6.10947 4.218C6.18147 4.174 6.25547 4.131 6.32947 4.09C6.66147 3.907 6.91147 3.595 6.97347 3.221L7.18747 1.94Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10Z"
                    fill="#E9E9EB"
                    stroke="#4B4C5E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Settings
              </Accordion.Header>
              <Accordion.Body>
                <Link
                  className={
                    window.location.pathname === "/platformsetting"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/platformsetting"}
                >
                  Platform Settings{" "}
                </Link>
                <br />
                <Link
                  className={
                    window.location.pathname === "/apisettings"
                      ? "activaccordianlink"
                      : "accordianlinks"
                  }
                  to={"/apisettings"}
                >
                  API Integrations{" "}
                </Link>
                {/* <Link to={'/completecampaign'}>Financial Reports</Link> */}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* <Sidemenu/> */}
        </Offcanvas.Body>
      </Offcanvas>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={handleShow}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

              <img src={logobacked} className="logoimg"/>
            </div>
          <div>
            <div className="topheaderdashboardbox" >
              {
                fulscreen ? (
                  <i
                    class="fa-solid fa-compress  fa-xl"
                    onClick={openFullScreen}
                    style={{ cursor: "pointer" }}
                  ></i> // Minimize icon
                ) : (
                  <i
                    class="fa-solid fa-expand  fa-xl"
                    onClick={openFullScreen}
                    style={{ cursor: "pointer" }}
                  ></i>
                ) // Full-screen icon
              }
              <>
                {/* <Dropdown menu={menu2} placement="bottom">
                  <div>
                    <i class="fa-regular fa-bell fa-xl"></i>
                  </div>
                </Dropdown> */}

                <App />
              </>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            // minHeight: '100%',
            background: colorBgContainer,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
