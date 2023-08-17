import React from "react"
import { Card } from "antd"
import { PlusOutlined, CheckOutlined } from "@ant-design/icons"
import { EIntegrationStates } from "../../Types/ChannelTypes"

interface IChannel {
  name: string
  icon: JSX.Element
  description: string
  state: EIntegrationStates
  isSelected?: boolean
  onChannelClick: () => void
}

const Channel: React.FC<IChannel> = ({
  name,
  icon,
  description,
  state,
  isSelected = false,
  onChannelClick,
}) => {
  const disabled = state === EIntegrationStates.IN_PROGRESS
  const extraIcon =
    state === EIntegrationStates.INTEGRATED ? (
      <CheckOutlined />
    ) : (
      <PlusOutlined />
    )

  return (
    <Card
      title={name}
      extra={extraIcon}
      style={{
        width: 300,
        marginBottom: 16,
        cursor: state === "integrated" ? "pointer" : "not-allowed",
        boxShadow: isSelected ? "0px 0px 8px 5px rgba(5,242,100,0.37)" : "none",
      }}
      onClick={onChannelClick}
      hoverable={!disabled}
    >
      <p>{description}</p>
    </Card>
  )
}

export default Channel
