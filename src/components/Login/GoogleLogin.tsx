
import { GoogleOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';

const GoogleLogin = () => {
    return (
        <div>
            <GoogleOutlined onClick={
            () => signIn("google", {callbackUrl: "http://localhost:3000/"})
            }
    />

        </div>
    );
};

export default GoogleLogin;