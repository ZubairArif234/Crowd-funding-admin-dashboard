


import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Dashboard', 'sub1', <MailOutlined />, [
   
  ]),
  getItem('Creator Management', 'sub2', <SettingOutlined />, [
    getItem('Pending Approval', '5'),
    getItem('Active Campaigns', '6'),
    getItem('Completed Campaigns', '7'),
   
  ]),
  getItem('Transaction Management', 'sub3', <SettingOutlined />, [
    getItem('Completed Transactions', '8'),
    getItem('Pending Transactions', '9'),
    getItem('Disputes', '10'),
    
  ]),
  getItem('Reports & Analytics', 'sub4', <SettingOutlined />, [
    getItem('User Statistics', '11'),
    getItem('Campaign Statistics', '12'),
    getItem('Financial Reports', '13'),
    
  ]),
  getItem('Content Management', 'sub5', <SettingOutlined />, [
    getItem('All Front End Pages List', '14'),
    // getItem('Campaign Statistics', '10'),
    // getItem('Financial Reports', '11'),
    
  ]),
  getItem('Blogs', 'sub6', <SettingOutlined />, [
    getItem('Add New Blogs', '15'),
    getItem('View Blogs', '16'),
    // getItem('Financial Reports', '11'),
    
  ]),
  getItem('Reports & Analytics', 'sub7', <SettingOutlined />, [
    getItem('User Statistics', '17'),
    getItem('Campaign Statistics', '18'),
    getItem('Financial Reports', '19'),
    
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const Sidemenu = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      theme='dark'
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      // onClick={}
      style={{
        width: 200,
        backgroundColor:'#140F26'
      }}
      items={items}
    />
  );
};
export default Sidemenu;