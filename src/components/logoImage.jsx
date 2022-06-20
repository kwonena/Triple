import React, { memo } from "react";
import styled from "styled-components";

const LOGO_IMAGE = "/images/triple2x.png";

const LogoImage = memo((props) => {
  return <LogoImg src={process.env.PUBLIC_URL + LOGO_IMAGE} alt="logo" />;
});

const LogoImg = styled.img`
  width: 400px;
  height: 338px;
`;

export default LogoImage;
