"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "./../../assets/login-image.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
// import GoogleLogin from "../Login/GoogleLogin";
import { useUserSignUpMutation } from "@/redux/api/signUpApi";

// type FormValues = {
//     name: string;
//     email: string;
//     password: string;
// };

const SignUpPage = () => {

    const [userSignUp] = useUserSignUpMutation();

    // const router = useRouter();

    const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      console.log(data);
      await userSignUp(data);
      message.success("Sign up successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
    
    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh", }}>
    <Col sm={12} md={16} lg={8}>
      <Image src={loginImage} width={500} alt="Login Image" />
    </Col>

    <Col sm={12} md={8} lg={8}>
      <h1 style={{ margin: "15px 0px" }}>Account Sign Up</h1>
      <div>
        <Form submitHandler={onSubmit}>
                <div>
                    <FormInput name="name" type="text" size="large" label=" Name" />
                </div>
                <div>
                    <FormInput name="email" type="email" size="large" label="E-Mail" />
                </div>
                <div style={{ margin: "15px 0px" }}>
                    <FormInput name="password" type="password" size="large" label="Password" />
                </div>
    
                <Button type="primary" block htmlType="submit">Submit</Button>
            </Form>
      </div>
      <div style={{ textAlign:"center" }}>
        <h1 style={{ margin: "15px 0px" }}>Social Login</h1>

          <Button type="primary" block style={{ fontSize:"25px" }}>
          {/* <GoogleLogin /> */}
        </Button>
        
      </div>
    </Col>
  </Row>
    );
};

export default SignUpPage;