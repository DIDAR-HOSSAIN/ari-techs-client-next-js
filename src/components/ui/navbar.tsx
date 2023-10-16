// components/ui/navbar.tsx
"use client"
import { Col, Image, Layout, Menu, Row } from 'antd';
import Header from './header';
// import logo from '@/images/resource-images/Logo/logo-updated.jpg';

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
            src="https://www.sender.net/wp-content/uploads/2022/08/b059-What-is-online-advertising-small-1024x658.webp"
            // src={logo}
            preview={false}
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
