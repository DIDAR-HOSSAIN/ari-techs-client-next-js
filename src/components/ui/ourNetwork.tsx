import { Col, Row } from 'antd';
import freeEvaluation from "@/assets/images/resource-images/net_bg.png";

const OurNetwork = () => {
    return (
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "20px", }}>
      <h1 style={{marginBottom:"20px", color:"#1890ff", fontSize:"50px"}}>Our Network Services</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" align="middle" 
      style={{
        backgroundImage: `url(${freeEvaluation.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight:"650px"
      }}>

      <Col className="gutter-row" span={8}>
        <h1 style={{color:"white", fontSize:"60px"}}>YOUR NETWORK <br /> OUR EXPERTISE</h1>
      </Col>

    </Row>
    </div>
    );
};

export default OurNetwork;