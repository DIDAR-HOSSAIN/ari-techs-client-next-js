"use client";
import { Layout } from "antd";

const {Content} = Layout

const HomeContents = ({children}:{children:React.ReactNode}) => {
    return (
        <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
            
          {children}
        </div>
      </Content>
    );
};

export default HomeContents;