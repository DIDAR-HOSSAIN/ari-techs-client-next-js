import React from 'react';
import { Col, Row } from 'antd';
import styles from '@/app/ourNetwork.module.css'; // Import your CSS Module file

const OurNetwork = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Network Services</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" align="middle" className={styles['responsive-bg']}>
        <Col className="gutter-row" span={8}>
          <h1 style={{ color: "white", fontSize: "60px" }}>YOUR NETWORK <br /> OUR EXPERTISE</h1>
        </Col>
      </Row>
    </div>
  );
};

export default OurNetwork;
