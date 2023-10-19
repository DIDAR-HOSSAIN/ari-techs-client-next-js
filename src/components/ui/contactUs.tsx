"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "./../../assets/login-image.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import {SubmitHandler} from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

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
        <Row justify="center" align="middle" style={{ minHeight: "100vh", }}>
        <Col sm={12} md={16} lg={8}>
        <div>
        <h1 style={{ margin: "15px 0px" }}>Why Choose Our IT Services?</h1>
        <h1 style={{ margin: "15px 0px" }}>Grow your business</h1>
        <p>Focus on scalling and expanding your business, while we take care of your IT needs and network requirments.</p>
        </div>

        <div>
          <h1>Streamline Processes</h1>
          <p>Increase productivity and performance of your organization when you have a dedicated IT support team by your side.</p>
        </div>

        <div>
          <h1>Empowering your people</h1>
          <p>Allow your employees to do more and focus on their jobs, without being held back by tech issues and concerns.</p>
        </div>
        </Col>
    
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0px" }}>Contact Us</h1>
          <div>
             <Form submitHandler={onSubmit}>

            <div>
                <FormInput name="full_name" type="text" size="large" label="Full name" />
            </div>

            <div>
                <FormInput name="work_email_address" type="email" size="large" label="Work email" />
            </div>

            <div>
                <FormInput name="inquiry_about" type="text" size="large" label="What is your inquiry about?" />
            </div>

            <div>
                <FormInput name="phone_no" type="text" size="large" label="Phone number" />
            </div>
            
            <div>
            <Button type="primary" size="large" htmlType="submit">Get a Free Consultation</Button>
            </div>

        </Form>
          </div>
        </Col>
      </Row>
    );
};

export default ContactUs;