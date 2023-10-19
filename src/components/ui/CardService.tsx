import { Card, Col, Row } from 'antd';
import slide from "@/assets/images/resource-images/services/1.png";
import slide1 from "@/assets/images/resource-images/services/2.png";
import slide2 from "@/assets/images/resource-images/services/3.png";
import slide3 from "@/assets/images/resource-images/services/4.png";
import slide4 from "@/assets/images/resource-images/services/5.png";
import slide5 from "@/assets/images/resource-images/services/6.png";
import slide6 from "@/assets/images/resource-images/services/7.png";
import slide7 from "@/assets/images/resource-images/services/8.png";
import slide8 from "@/assets/images/resource-images/services/9.png";
import freeEvaluation from "@/assets/images/resource-images/our_network_services_bg.png";

const Services = () => {

  
  return (
    <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "20px", }}>
      <h1 style={{marginBottom:"20px", color:"#1890ff", fontSize:"50px"}}>Our Network Services</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" align="middle" 
      style={{
        backgroundImage: `url(${freeEvaluation.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        // marginTop:'-500px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
      }}>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Network Design & Installation</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide1.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Network Trouble-shotting</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide2.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Firewall Installation</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide3.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>WIFI Solution</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide4.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>On Site Support</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide5.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Aging Hardware</h1>
        </Card>
      </Col>


      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide6.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Network Monitoring 24/7 Support</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide7.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Wireless Access Point Setup</h1>
        </Card>
      </Col>

      <Col className="gutter-row" span={8}>
      <Card
      style={{
        backgroundImage: `url(${slide8.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:300,
        width:350,
        objectFit: 'cover',
        display: 'block',
        margin: 'auto'
      }}
      >
        <h1 style={{color:"white"}}>Server Installation</h1>
        </Card>
      </Col>

    </Row>
    </div>
         
  );
};

export default Services;
