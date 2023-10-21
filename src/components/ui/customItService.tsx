import { Card, Col, Divider, Row } from "antd";
import React from "react";

const CustomService = () => {
  const cardStyle = {
    height: 300,
    width: 350,
    objectFit: 'cover' as 'cover', // Make sure objectFit is of the correct type
    display: 'block',
    margin: 'auto',
    borderTop: '20px solid green',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 0',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <Divider><h1 style={{ marginBottom: '20px', color: '#1890ff', fontSize: '30px' }}>Custom IT Services & solutions for your business</h1></Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" align="middle">
        <Col className="gutter-row" span={8}>
          <Card style={cardStyle}>
            <h1 style={{ color: '#1890ff', textAlign: 'center' }}>IT Support</h1>
            <p style={{ color: 'black', fontSize: '20px' }}>Supporting your business with IT services</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card style={cardStyle}>
            <h1 style={{ color: '#1890ff', textAlign: 'center' }}>Managed IT</h1>
            <p style={{ color: 'black', fontSize: '20px' }}>Maintenance & monitoring your networks</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card style={cardStyle}>
            <h1 style={{ color: '#1890ff', textAlign: 'center' }}>Cybersecurity</h1>
            <p style={{ color: 'black', fontSize: '20px' }}>Protecting your network</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CustomService;
