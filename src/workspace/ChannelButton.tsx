import React from "react"
import { Card, Badge } from "antd"
import { Channel } from "./mockData"

type Props = {
  channel: Channel
  isSelected: boolean
  onSelect: (channelName: string) => void
}

const ChannelButton: React.FC<Props> = ({ channel, isSelected, onSelect }) => {
  return (
    <Badge
      dot
      offset={[10, 10]}
      status={channel.available ? "success" : "error"}
    >
      <Card
        hoverable
        cover={
          <img
            src={channel.logo}
            alt={channel.name}
            style={{
              maxHeight: "150px",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
        }
        onClick={() => onSelect(channel.name)}
        bordered={isSelected}
        style={isSelected ? { borderColor: "#1890ff", borderWidth: "2px" } : {}}
      >
        <Card.Meta title={channel.name} style={{ textAlign: "center" }} />
      </Card>
    </Badge>
  )
}

export default ChannelButton
