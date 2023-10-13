// components/ui/navbar.tsx
"use client"
import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;

const menuItems = [
  {
    key: 'mail',
    icon: <MailOutlined />,
    title: 'Mail',
  },
  {
    key: 'app',
    icon: <AppstoreOutlined />,
    title: 'App',
  },
  {
    key: 'setting',
    icon: <SettingOutlined />,
    title: 'Setting',
  },
  // Add more items as needed
];

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['app']}>
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
