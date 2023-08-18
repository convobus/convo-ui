import React from "react"
import styled from "styled-components"
import { Card, Collapse } from "antd"
import mockData from "./mockData"

const { Panel } = Collapse

const ChannelCard = styled(Card)`
  width: 240px;
  margin: 16px;
  background: white;
  box-shadow: ${(props) => props.theme.boxShadow};
`

function SocialMediaChannels() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Social Channels" key="1">
        {mockData.socialMediaChannels.map((channel) => (
          <ChannelCard key={channel.id} title={channel.name}>
            {channel.description}
          </ChannelCard>
        ))}
      </Panel>
    </Collapse>
  )
}

export default SocialMediaChannels
