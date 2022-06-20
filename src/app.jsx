import styled from "styled-components";
import AwardsList from "./components/awardsList";
import CountList from "./components/countList";
import LogoImage from "./components/logoImage";

function App() {
  return (
    <AppStyle>
      <Section1>
        <LogoImage />
      </Section1>
      <Section2>
        <CountList />
        <AwardsList />
      </Section2>
    </AppStyle>
  );
}

const AppStyle = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section1 = styled.section``;
const Section2 = styled(Section1)`
  display: flex;
  flex-direction: column;
`;

export default App;
