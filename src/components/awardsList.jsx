import React, { memo } from "react";
import styled from "styled-components";

const PLAYSTORE_IMAGE = "/images/play-store2x.png";
const APPSTORE_IMAGE = "/images/badge-apple4x.png";

const AwardsList = memo((props) => {
  return (
    <Container>
      <AwardsItem>
        <ItemImg src={process.env.PUBLIC_URL + PLAYSTORE_IMAGE} alt="logo" />
        <ItemText>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </ItemText>
      </AwardsItem>
      <AwardsItem>
        <ItemImg src={process.env.PUBLIC_URL + APPSTORE_IMAGE} alt="logo" />
        <ItemText>
          2018 애플 앱스토어
          <br />
          올해의 여행앱 선정
        </ItemText>
      </AwardsItem>
    </Container>
  );
});

const Container = styled.section`
  display: flex;
`;

const AwardsItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 39px;
`;

const ItemImg = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 10px;
`;

const ItemText = styled.span`
  font-family: sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`;

export default AwardsList;
