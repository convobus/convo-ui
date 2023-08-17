import { Button, Modal } from "antd"
import Channels from "../../components/ChannelsContainer"
import FooterComponent from "../../components/FooterComponent"
import Header from "../../components/HeaderComponent"
import IntegrationList from "../../components/IntegrationList"
import DashboardStyled from "./Dashboard.styled"
import { useState } from "react"

const Dashboard = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <DashboardStyled>
      <Header />
      <div style={{ flex: 1 }}>
        <Channels />
        <IntegrationList />
        <Button onClick={() => setModal2Open(true)}>Continue</Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
      <FooterComponent />
    </DashboardStyled>
  )
}

export default Dashboard
