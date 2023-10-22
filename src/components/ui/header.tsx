
import { Avatar, Button, Dropdown, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Header = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link href="/login">
        <Button type="text" danger>
          Login
        </Button>
        </Link>
        
      ),
    },
    {
      key: "1",
      label: (
        <Link href={"/sign-up"}>
        <Button type="text" danger>
          Sign Up
        </Button>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const { role } = getUserInfo() as any;

  return (

      // style={{
      //   background: "#fff",
      // }}

      <Row
        justify="end"
        align="middle"
      >
        <p
          style={{
            margin: "0px 5px",
            fontSize: 16,
            color: 'white'
          }}
        >
        {role}
        </p>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>

  );
};

export default Header;