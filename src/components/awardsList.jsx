import React, { memo } from "react";
import styled from "styled-components";

const PLAYSTORE_IMAGE = "/images/play-store2x.png";
const APPSTORE_IMAGE = "/images/badge-apple4x.png";

const AwardsList = memo((props) => {
  return (
    <>
      <GoogleImg src={process.env.PUBLIC_URL + PLAYSTORE_IMAGE} alt="logo" />;
      <AppleImg src={process.env.PUBLIC_URL + APPSTORE_IMAGE} alt="logo" />;
    </>
  );
});

const GoogleImg = styled.img`
  width: 400px;
  height: 338px;
`;

const AppleImg = styled(GoogleImg)`
  width: 400px;
  height: 338px;
`;

export default AwardsList;
