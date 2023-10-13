"use client";

import { useState } from "react";
import { getUserInfo } from "@/services/auth.service";
import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import ActionBar from "./ActionBar";
import Link from "next/link";
import HeaderPage from "./header";
import navbarItems from "@/constants/navbarItems";

const { Header, Content, Footer } = Layout;

const NavbarBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
   <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={navbarItems}
        />
      </Header>
      <ActionBar title="Department List">
                <div className="flex">
                  <input type="text" placeholder="Search..."
                    style={
                        {
                            width: "20%"
                        }
                    }
                    // onChange={
                    //     (e) => {
                    //         setSearchTerm(e.target.value)
                    //     }
                    // }
                    />
                    
                    <HeaderPage /> 
                  </div>             
             
            </ActionBar>
      <Content style={{ padding: '0 50px', marginTop:"10px" }}>
        <div className="site-layout-content">
          <h1>this home content</h1>
          <h1>this home content</h1>
          <h1>this home content</h1>
          <h1>this home content</h1>
          <h1>this home content</h1>
          <h1>this home content</h1>
          <h1>this home content</h1>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default NavbarBar;
