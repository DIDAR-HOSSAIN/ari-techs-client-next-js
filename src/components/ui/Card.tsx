import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import slide from "../../../public/images/resource-images/background.jpg";

const Services = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop:"20px", }}>
      
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={8}>
      <Card>
      <Image
            height={200}
            src={slide}
            alt="Image 1"
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={8}>
      <Card>
      <Image
            height={200}
            src={slide}
            alt="Image 1"
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={8}>
      <Card>
      <Image
            height={200}
            src={slide}
            alt="Image 1"
          />
      </Card>
      </Col>
    </Row>
    </div>
         
  );
};

export default Services;
