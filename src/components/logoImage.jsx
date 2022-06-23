import React, { memo } from "react";
import styled from "styled-components";

const LOGO_IMAGE = "/images/triple2x.png";

const LogoImage = memo((props) => {
  return (
    <Container>
      <LogoImg src={process.env.PUBLIC_URL + LOGO_IMAGE} alt="logo" />
      <LogoTitle>2019년 2월 기준</LogoTitle>
    </Container>
  );
});

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 400px;
  height: 338px;
`;

const LogoTitle = styled.span`
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
`;

export default LogoImage;
