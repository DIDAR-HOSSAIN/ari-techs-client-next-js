"use client";
import { Button, Col, Row, message } from "antd";
import Form from "@/components/Forms/Form";
import {SubmitHandler} from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import FormTextArea from "../Forms/FormTextArea";

type FormValues = {
    id: string;
    password: string;
};

const ContactUs = () => {
    const [userLogin] = useUserLoginMutation();
const router = useRouter();

    const onSubmit:SubmitHandler<FormValues> = async(data:any) =>{
        try{
            const res = await userLogin({...data}).unwrap();
            if(res?.accessToken){
              router.push("/profile");
              message.success("User logged in successfully");
            }
            storeUserInfo({accessToken: res?.accessToken});
            console.log(res);
        }catch(err:any){
          console.log(err.message);
        }
    };
    return (
        <Row justify="center" align="middle"  style={{ marginTop:"20px" }}>
        <Col sm={12} md={16} lg={8}>
        <div>
        <h1>Why Choose Our IT Services?</h1>
        <h1 style={{ margin: "15px 0px" }}>Grow your business</h1>
        <p style={{ fontSize: '20px'}}>Focus on scalling and expanding your business, while we take care of your IT needs and network requirments.</p>
        </div>

        <div>
          <h1 style={{ margin: "15px 0px" }}>Streamline Processes</h1>
          <p style={{ fontSize: '20px'}}>Increase productivity and performance of your organization when you have a dedicated IT support team by your side.</p>
        </div>

        <div>
          <h1 style={{ margin: "15px 0px" }}>Empowering your people</h1>
          <p style={{ fontSize: '20px'}}>Allow your employees to do more and focus on their jobs, without being held back by tech issues and concerns.</p>
        </div>
        </Col>
    
        <Col sm={12} md={8} lg={8}>
          <h1>Contact Us</h1>
          <div style={{ fontSize: '20px'}}>
             <Form submitHandler={onSubmit}>

            <div>
                <FormInput name="full_name" type="text" size="large" label="Full name" />
            </div>

            <div>
                <FormInput name="work_email_address" type="email" size="large" label="Work Email Address" />
            </div>

            <div>
                <FormTextArea
                  name="inquiry_about"
                  label="What is your inquiry about?"
                  rows={4}
                />
            </div>

            <div>
                <FormInput name="phone_no" type="text" size="large" label="Phone number" />
            </div>
            
            <div>
            <Button type="primary" block htmlType="submit" style={{ marginTop:"20px" }} >Get a Free Consultation</Button>
            </div>

        </Form>
          </div>
        </Col>
      </Row>
    );
};

export default ContactUs;