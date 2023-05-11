




import '../dashboard.css'
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
//   MenuUnfoldOutlined,
} from '@ant-design/icons';
import logo from '../components/images/logo.png'
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Sidemenu from '../components/images/sidebarmenu';
import Smallcard from '../components/images/dashboardtopsmallcards';
import Dashboardtotaluser from '../components/images/dashboardtotaluser';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{height:'100vh'}}>
      <Sider style={{backgroundColor:'#140F26'}} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        {/* <div style={{backgroundColor:'white'}}> */}

        <img src={logo} width={200} height={50} style={{margin:'10px 0px'}} />
        {/* </div> */}
        {/* <Menu
          theme="dark"
          style={{backgroundColor:'#140F26'}}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        /> */}
        <Sidemenu/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className='allsmallcardtopdashboard'>
            <Smallcard bordercolour='3px solid darkgreen'/>
            <Smallcard bordercolour='3px solid orangered'/>
            <Smallcard bordercolour='3px solid #3A6FF8'/>
            <Smallcard bordercolour='3px solid yellow'/>
          </div>
          {/* <div>
            <Dashboardtotaluser/>
          </div> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;