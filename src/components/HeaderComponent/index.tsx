// import HeaderStyled from "./Header.styled"
import { Layout, Menu, Dropdown, Avatar, MenuProps } from "antd"
import convoBusLogo from "../../assets/images/convoBusLogo.svg"
import HeaderComponentStyled from "./HeaderComponent.styled"
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons"

const { Header } = Layout

const HeaderComponent = () => {
  const items: MenuProps["items"] = [
    {
      key: "view_profile",
      label: "View Profile",
      icon: <UserOutlined />,
      onClick: () => {
        console.log("Redirect to Profile Page")
      },
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: () => {
        console.log("Logout User")
      },
    },
  ]

  return (
    <HeaderComponentStyled>
      <Header className="header">
        <img src={convoBusLogo} alt="convoBus" className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ flexGrow: 1 }}
        >
          <Menu.Item key="1">Homepage</Menu.Item>
        </Menu>
        <div className="user-profile">
          <Dropdown menu={{ items }} placement="bottom">
            <div>
              <Avatar size="small" icon={<UserOutlined />} />
              <span className="user-name">John Doe</span>
            </div>
          </Dropdown>
        </div>
      </Header>
    </HeaderComponentStyled>
  )
}

export default HeaderComponent
