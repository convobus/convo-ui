import React, { useState } from "react"
import {
  Steps,
  Card,
  Radio,
  Row,
  Col,
  Divider,
  Typography,
  Button,
  Space,
} from "antd"
import { channels, buses } from "./mockData"
import ChannelButton from "./ChannelButton"

const { Step } = Steps
const { Title } = Typography

const MainSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedSource, setSelectedSource] = useState<string | null>(null)
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null)
  const [selectedBus, setSelectedBus] = useState<string | null>(null)

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto" }}>
      <Steps direction="horizontal" current={currentStep}>
        <Step title="Select Source Channel" />
        <Step title="Select Target Channel" />
        <Step title="Create a Bus" />
        <Step title="Preview" />
      </Steps>
      <Divider />
      {currentStep === 0 && (
        <>
          <Title level={3}>Select Source Channel</Title>
          <Row gutter={[16, 16]}>
            {channels.map((channel) => (
              <Col span={8} key={channel.name}>
                <ChannelButton
                  channel={channel}
                  isSelected={selectedSource === channel.name}
                  onSelect={setSelectedSource}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
      {currentStep === 1 && (
        <>
          <Title level={3}>Select Target Channel</Title>
          <Row gutter={[16, 16]}>
            {channels.map((channel) => (
              <Col span={8} key={channel.name}>
                <ChannelButton
                  channel={channel}
                  isSelected={selectedTarget === channel.name}
                  onSelect={setSelectedTarget}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Title level={3}>Create a Bus</Title>
          <Radio.Group
            value={selectedBus}
            onChange={(e) => setSelectedBus(e.target.value)}
          >
            {buses.map((bus) => (
              <Radio key={bus.name} value={bus.name}>
                {bus.name}
              </Radio>
            ))}
          </Radio.Group>
        </>
      )}
      {currentStep === 3 && (
        <>
          <Title level={3}>Preview</Title>
          <Typography.Text>Selected Source: {selectedSource}</Typography.Text>
          <br />
          <Typography.Text>Selected Target: {selectedTarget}</Typography.Text>
          <br />
          <Typography.Text>Selected Bus: {selectedBus}</Typography.Text>
        </>
      )}
      <Divider />
      <Space>
        {currentStep > 0 && (
          <Button onClick={() => setCurrentStep((prev) => prev - 1)}>
            Back
          </Button>
        )}
        {currentStep < 3 && (
          <Button
            type="primary"
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            Next
          </Button>
        )}
      </Space>
    </div>
  )
}

export default MainSteps
