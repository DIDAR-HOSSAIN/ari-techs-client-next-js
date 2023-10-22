
"use client";
import { Col, Layout, Menu, Row } from 'antd';
import Header from './header';
import logo from '@/assets/images/resource-images/Logo/logo-transparent.png';
import Image from 'next/image';

const { Header:AntHeader } = Layout;

const menuItems = [
  {
    key: 'home',
    title: 'Home',
  },
  {
    key: 'services',
    title: 'Services',
  },
  {
    key: 'consulting',
    title: 'Consulting',
  },
  {
    key: 'about',
    title: 'About',
  },
  {
    key: 'contact',
    title: 'Contact',
  },
  // Add more items as needed
];

const Navbar = () => {
  return (
<AntHeader>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div>
          <Image
            width={150}
            height={65}
            alt=''
            src={logo}
          />
        </div>
    
      </Col>
      <Col className="gutter-row" span={12}>
        <div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{fontSize:"20px"}}>
        {menuItems.map(item => (
          <Menu.Item key={item.key}>
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
        </div>
        
      </Col>
      <Col className="gutter-row" span={6}>
          <Header />
      </Col>
    </Row>
      
    </AntHeader>
  );
};

export default Navbar;



// https://www.youtube.com/watch?v=1bJ_LkCJVP8
