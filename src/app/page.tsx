

// import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { getUserInfo, removeUserInfo } from "@/services/auth.service";
// import { authKey } from "@/constants/storageKey";
// // import { useRouter } from "next/navigation";
// const { Header: AntHeader } = Layout;

// const Header = () => {
//   // const router = useRouter();

//   const logOut = () => {
//     removeUserInfo(authKey);
//     // router.push("/login");
//   };

//   const items: MenuProps["items"] = [
//     {
//       key: "0",
//       label: (
//         <Button onClick={logOut} type="text" danger>
//           Logout
//         </Button>
//       ),
//     },
//   ];
//   const { role } = getUserInfo() as any;
//   return (
//     <AntHeader
//       style={{
//         background: "#fff",
//       }}
//     >
//       <Row
//         justify="end"
//         align="middle"
//         style={{
//           height: "100%",
//         }}
//       >
//         <p
//           style={{
//             margin: "0px 5px",
//           }}
//         >
//           {role}
//         </p>
//         <Dropdown menu={{ items }}>
//           <a>
//             <Space wrap size={16}>
//               <Avatar size="large" icon={<UserOutlined />} />
//             </Space>
//           </a>
//         </Dropdown>
//       </Row>
//     </AntHeader>
//   );
// };

// export default Header;



"use client";
import { Breadcrumb, Button, Layout, Menu, MenuProps, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const HomePage = () => {

  //  const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <div></div>
  );
};

export default HomePage;