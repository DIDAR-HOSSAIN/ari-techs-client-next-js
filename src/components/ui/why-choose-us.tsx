import Image from "next/image";
import certified from "@/assets/images/resource-images/reasons/certified.png"
import goodValue from "@/assets/images/resource-images/reasons/good_value.png"
import yearsExp from "@/assets/images/resource-images/reasons/yrs_of_xp.png"
import responseTime from "@/assets/images/resource-images/reasons/response_time.png"
import satisfaction from "@/assets/images/resource-images/reasons/satisfaction.png"
import { Col, Row } from "antd";


const WhyChooseUs = () => {
    return (
            <Row justify="center" align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop:"20px", width:"100%"}}>
            <Col justify="center" align="right" className="gutter-row" span={10}>
            <Image src={certified} width={100} height={100} alt="Certified image" />
            </Col>

            <Col className="gutter-row" span={14}>
            <div>
                <h2>Industry leading vendor, certified engineers</h2>
                <p>Cisco, Microsoft, Meraki, Fortinet, Paloalto, AWS.</p>
            </div>
            </Col>
            <Col style={{ marginTop:"20px"}} justify="center" align="right" className="gutter-row" span={10}>
            <Image src={goodValue} width={100} height={100} alt="Certified image" />
            </Col>

            <Col className="gutter-row" span={14}>
            <div>
                <h2>Good Value</h2>
                <p>Greate rates and someone you can trust to make sure you are taken care of without overspending.</p>
            </div>
            </Col>
            <Col style={{ marginTop:"20px"}} justify="center" align="right" className="gutter-row" span={10}>
            <Image src={yearsExp} width={100} height={100} alt="Certified image" />
            </Col>

            <Col className="gutter-row" span={14}>
            <div>
                <h2>Years of Experience</h2>
                <p>Serving multiple industries since 2011.</p>
            </div>
            </Col>
            <Col style={{ marginTop:"20px"}} justify="center" align="right" className="gutter-row" span={10}>
            <Image src={responseTime} width={100} height={100} alt="Certified image" />
            </Col>

            <Col className="gutter-row" span={14}>
            <div>
                <h2>Fast Response Times</h2>
                <p>You can count on a quick response, and 24 hour remote support and onsite support when needed.</p>
            </div>
            </Col>
            <Col style={{ marginTop:"20px"}} justify="center" align="right" className="gutter-row" span={10}>
            <Image src={satisfaction} width={100} height={100} alt="Certified image" />
            </Col>

            <Col className="gutter-row" span={14}>
            <div>
                <h2>100 % Satisfaction Guarantee</h2>
                <p>You can rely on us for safe, reliable, and cost-effective  IT support and solutions. Your satisfaction is our top priority, that's why we work to exceed your expectations.</p>
            </div>
            </Col>
        </Row>
    );
};

export default WhyChooseUs;