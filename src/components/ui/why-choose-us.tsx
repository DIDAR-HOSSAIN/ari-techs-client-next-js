import Image from "next/image";
import certified from "@/assets/images/resource-images/reasons/certified.png"
import goodValue from "@/assets/images/resource-images/reasons/good_value.png"
import yearsExp from "@/assets/images/resource-images/reasons/yrs_of_xp.png"
import responseTime from "@/assets/images/resource-images/reasons/response_time.png"
import satisfaction from "@/assets/images/resource-images/reasons/satisfaction.png"
import { Col, Row } from "antd";


const WhyChooseUs = () => {
    return (
<>
<div style={{marginTop:"20px", textAlign:"center", color:"#1890ff"}}>
<h3>WHY CHOOSE US</h3>
<h1>5 Reasons to partner with Aritechs</h1>
</div>
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ width: "100%", }}
      justify="space-between"
      align="middle"

    >

      <Col  className="gutter-row" span={10}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image src={certified} width={200} height={200} alt="Certified image" />
        </div>
      </Col>

      <Col className="gutter-row" span={14}>
        <div style={{ display: 'flex', flexDirection: 'column',  }}>
          <h1 style={{ fontSize: '35px' }}>Industry leading vendor, certified engineers</h1>
          <p style={{ fontSize: '20px' }}>Cisco, Microsoft, Meraki, Fortinet, Paloalto, AWS.</p>
        </div>
      </Col>

         <Col className="gutter-row" span={10}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"20px" }}>
            <Image src={goodValue} width={200} height={200} alt="Certified image" />
         </div>
         </Col>

         <Col className="gutter-row" span={14}>
         <div style={{ display: 'flex', flexDirection: 'column'  }}>
             <h2 style={{ fontSize: '35px'}}>Good Value</h2>
             <p style={{ fontSize: '20px'}}>Greate rates and someone you can trust to make sure you are taken care of without overspending.</p>
         </div>
         </Col>

         <Col className="gutter-row" span={10}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"20px" }}>
            <Image src={yearsExp} width={200} height={200} alt="Certified image" />
         </div>
         </Col>

         <Col className="gutter-row" span={14}>
         <div style={{ display: 'flex', flexDirection: 'column',  marginTop:"20px" }}>
             <h2 style={{ fontSize: '35px'}}>Years of Experience</h2>
             <p style={{ fontSize: '20px'}}>Serving multiple industries since 2011.</p>
         </div>
         </Col>

         <Col  className="gutter-row" span={10}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"20px" }}>
            <Image src={responseTime} width={200} height={200} alt="Certified image" />
         </div>
         </Col>

         <Col className="gutter-row" span={14}>
         <div style={{ display: 'flex', flexDirection: 'column',  marginTop:"20px" }}>
             <h2 style={{ fontSize: '35px'}}>Fast Response Times</h2>
             <p style={{ fontSize: '20px'}}>You can count on a quick response, and 24 hour remote support and onsite support when needed.</p>
         </div>
         </Col>

         <Col className="gutter-row" span={10}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"20px" }}>
            <Image src={satisfaction} width={200} height={200} alt="Certified image" />
         </div>
         </Col>

         <Col className="gutter-row" span={14}>
         <div style={{ display: 'flex', flexDirection: 'column', marginTop:"20px"}}>
             <h2 style={{ fontSize: '35px'}}>100 % Satisfaction Guarantee</h2>
             <p style={{ fontSize: '20px'}}>You can rely on us for safe, reliable, and cost-effective  IT support and solutions. Your satisfaction is our top priority, that's why we work to exceed your expectations.</p>
         </div>
         </Col>
     </Row>
</>
    );
};

export default WhyChooseUs;