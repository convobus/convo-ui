import { styled } from "styled-components"

const HeaderComponentStyled = styled.div`
  .header {
    display: flex;
    align-items: center;
    background: white;
  }

  .logo {
    height: 60px;
  }

  .user-profile {
    cursor: pointer;

    .ant-dropdown-trigger {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
`

export default HeaderComponentStyled
