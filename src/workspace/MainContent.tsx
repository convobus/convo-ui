import React from "react";
import { Layout } from "antd";
import styled from 'styled-components';
import MainSteps from "./MainSteps";

const { Content } = Layout;

interface MainContentProps {
  bgColor: string;
}

const StyledContent = styled(Content)<MainContentProps>`
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
  background: ${props => props.bgColor};
`;

const MainContent: React.FC<MainContentProps> = ({ bgColor }) => {
  return (
    <StyledContent bgColor={bgColor}>
      <MainSteps />
    </StyledContent>
  );
};

export default MainContent;
