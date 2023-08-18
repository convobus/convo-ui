import React, { useState } from "react"
import { Layout, theme } from "antd"
import SideNavigation from "./SideNavigation"
import TopHeader from "./TopHeader"
import MainContent from "./MainContent"

const { Header, Sider } = Layout

const Dashboard2: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <SideNavigation collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <TopHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <MainContent bgColor={colorBgContainer} />
      </Layout>
    </Layout>
  )
}

export default Dashboard2
