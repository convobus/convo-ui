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

function MarketChannels() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Market Channels" key="1">
        {mockData.marketChannels.map((channel) => (
          <ChannelCard key={channel.id} title={channel.name}>
            {channel.description}
          </ChannelCard>
        ))}
      </Panel>
    </Collapse>
  )
}

export default MarketChannels
