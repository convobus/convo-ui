import React from "react";
import { Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const ToggleButton = styled(Button)`
  font-size: 16px;
  width: 64px;
  height: 64px;
`;

interface TopHeaderProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <ToggleButton 
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
    />
  );
};

export default TopHeader;
