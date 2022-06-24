import React from "react";
import styled, { keyframes } from "styled-components";
import AwardsList from "./components/awardsList";
import CountList from "./components/countList";
import LogoImage from "./components/logoImage";

function App() {
  return (
    <AppStyle>
      <LogoImageSection>
        <LogoImage />
      </LogoImageSection>
      <ListSection>
        <CountListBox>
          <CountList />
        </CountListBox>
        <AwardsListBox>
          <AwardsList />
        </AwardsListBox>
      </ListSection>
    </AppStyle>
  );
}

// keyframes를 사용해 위로 떠오르는 애니메이션 구현
const keyframe = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }
  100% {
    opacity: 1;
  }
`;

const AppStyle = styled.section`
  min-width: 1200px;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

// 애니메이션은 700ms동안 구현 되고
// 각 컴포넌트는 100ms의 간격을 가짐
const LogoImageSection = styled.section`
  animation: ${keyframe} 700ms 100ms ease;
`;

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 220px;
`;

const CountListBox = styled.div`
  animation: ${keyframe} 700ms 200ms ease;
`;

const AwardsListBox = styled.div`
  animation: ${keyframe} 700ms 300ms ease;
`;

export default App;
