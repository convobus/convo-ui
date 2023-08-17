import { Card, Row, Col } from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons"
import { useState } from "react"

interface ISocialMedia {
  name: string
  icon: JSX.Element
  description: string
  integrated: boolean
}

const socialMediaPlatforms = [
  {
    name: "Facebook",
    icon: <FacebookOutlined />,
    description: "Connect with your Facebook account.",
    integrated: true,
  },
  {
    name: "Twitter",
    icon: <TwitterOutlined />,
    description: "Connect with your Twitter account.",
    integrated: false,
  },
  {
    name: "Instagram",
    icon: <InstagramOutlined />,
    description: "Connect with your Instagram account.",
    integrated: true,
  },
]

interface ISocialMediaIntegrationCard extends ISocialMedia {
  isSelected: boolean
  onMediaClick: () => void
}

const SocialMediaIntegrationCard: React.FC<ISocialMediaIntegrationCard> = ({
  name,
  icon,
  description,
  integrated,
  isSelected,
  onMediaClick,
}) => {
  return (
    <Card
      title={name}
      extra={integrated ? "Connected" : "Not Connected"}
      style={{
        width: 300,
        marginBottom: 16,
        cursor: integrated ? "pointer" : "not-allowed",
        boxShadow: isSelected ? "0px 0px 8px 5px rgba(5,242,100,0.37)" : "none",
      }}
      onClick={onMediaClick}
    >
      <p>{description}</p>
    </Card>
  )
}

const IntegrationList = () => {
  const [socialMedia, setSocialMedia] = useState<ISocialMedia>()

  const handleChannelClick = (socialMedia: ISocialMedia) => {
    if (socialMedia.integrated) {
      setSocialMedia(socialMedia)
    }
  }

  return (
    <Row gutter={16}>
      {socialMediaPlatforms.map((platform, index) => (
        <Col key={index} span={8}>
          <SocialMediaIntegrationCard
            {...platform}
            isSelected={socialMedia?.name === platform.name}
            onMediaClick={() => handleChannelClick(platform)}
          />
        </Col>
      ))}
    </Row>
  )
}

export default IntegrationList
