import { Row, Col } from "antd"
import { AmazonOutlined, PlusOutlined } from "@ant-design/icons"
import Channel from "../Channel"
import ChannelsStyled from "./Channels.styled"
import { EIntegrationStates } from "../../Types/ChannelTypes"
import { useState } from "react"

export type TChannel = {
  name: string
  icon: JSX.Element
  description: string
  state: EIntegrationStates
}

const integrations: TChannel[] = [
  {
    name: "Amazon",
    icon: <AmazonOutlined />,
    description: "Integrate with Amazon store.",
    state: EIntegrationStates.NOT_INTEGRATED,
  },
  {
    name: "Shopify",
    icon: <AmazonOutlined />,
    description: "Integrate with Shopify store.",
    state: EIntegrationStates.INTEGRATED,
  },
  {
    name: "In Progress Integration",
    icon: <PlusOutlined />,
    description: "Integration is in progress...",
    state: EIntegrationStates.IN_PROGRESS,
  },
  // Add more integrations here
]

const ChannelContainer = () => {
  const [selectedChannel, setSelectedChannel] = useState<TChannel>()

  const handleChannelClick = (channel: TChannel) => {
    if (channel.state === EIntegrationStates.INTEGRATED) {
      setSelectedChannel(channel)
    }
  }

  return (
    <ChannelsStyled>
      <Row gutter={16} className="">
        {integrations.map((integration, index) => (
          <Col key={index} span={8}>
            <Channel
              {...integration}
              isSelected={selectedChannel?.name === integration.name}
              onChannelClick={() => handleChannelClick(integration)}
            />
          </Col>
        ))}
      </Row>
    </ChannelsStyled>
  )
}

export default ChannelContainer
