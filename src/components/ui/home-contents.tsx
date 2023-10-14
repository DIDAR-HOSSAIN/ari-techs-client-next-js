"use client";
import { Layout } from "antd";
import Search from "./search";

const {Content} = Layout

const HomeContents = ({children}:{children:React.ReactNode}) => {
    return (
        <Content style={{ padding: '0 50px' }}>
          <Search />
        <div className="site-layout-content">
            
          {children}
        </div>
      </Content>
    );
};

export default HomeContents;