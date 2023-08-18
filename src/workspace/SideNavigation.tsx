import React from "react"
import { Menu } from "antd"
import { menuItems } from "./mockData"

const { SubMenu } = Menu

type Props = {
  collapsed: boolean
}

const SideNavigation: React.FC<Props> = ({ collapsed }) => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {menuItems.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((subItem) => (
                <Menu.Item key={subItem.key} icon={subItem.icon}>
                  {subItem.label}
                </Menu.Item>
              ))}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

export default SideNavigation
