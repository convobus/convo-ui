import {
  SettingOutlined,
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
  BarChartOutlined,
} from "@ant-design/icons"
import {
  FacebookOutlined,
  AmazonOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons"

type MenuItem = {
  key: string
  icon: React.ReactElement
  label: string
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    key: "channels",
    icon: <AppstoreOutlined />,
    label: "Channels",
    children: [
      {
        key: "social-media",
        icon: <GlobalOutlined />,
        label: "Social Media",
      },
      {
        key: "market-place",
        icon: <ShopOutlined />,
        label: "Market Place",
      },
    ],
  },
  {
    key: "bus",
    icon: <ShoppingCartOutlined />,
    label: "Bus",
    children: [
      {
        key: "marketing",
        icon: <BarChartOutlined />,
        label: "Marketing",
      },
      {
        key: "growth",
        icon: <BarChartOutlined />,
        label: "Growth",
      },
      {
        key: "ads",
        icon: <BarChartOutlined />,
        label: "Ads",
      },
    ],
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
]

export type Channel = {
  name: string
  icon: React.ReactElement
  logo: string
  available: boolean
}

export type Bus = {
  name: string
}

export const channels: Channel[] = [
  {
    name: "Shopify",
    logo: "https://www.cdnlogo.com/logos/s/88/shopify.svg",
    icon: <ShopOutlined />,
    available: true,
  },
  {
    name: "Amazon",
    logo: "https://www.cdnlogo.com/logos/a/36/amazon-dark.svg",
    icon: <AmazonOutlined />,
    available: false,
  },
  {
    name: "Facebook",
    logo: "https://www.cdnlogo.com/logos/f/47/facebook-3.svg",
    icon: <FacebookOutlined />,
    available: true,
  },
  {
    name: "Instagram",
    logo: "https://www.cdnlogo.com/logos/i/92/instagram.svg",
    icon: <InstagramOutlined />,
    available: true,
  },
  {
    name: "WhatsApp",
    logo: "https://www.cdnlogo.com/logos/w/35/whatsapp-icon.svg",
    icon: <WhatsAppOutlined />,
    available: false,
  },
]

export const buses: Bus[] = [
  { name: "Ads" },
  { name: "Marketing Campaign" },
  { name: "Posts" },
]
