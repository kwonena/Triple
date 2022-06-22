import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountList = (props) => {
  const [userCount, setUserCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);

  useEffect(() => {
    loadNum();
  }, []);

  const loadNum = () => {
    const maxNumArr = [350, 21, 650];

    maxNumArr.forEach((max) => {
      increaseNum(max);
    });
  };

  const increaseNum = (max) => {
    let now = max;
    const time = (2 / max) * 1000;

    const handleNum = setInterval(() => {
      const num = Math.ceil(max - now);
      const step = now / 10;
      console.log(num, max, now);
      console.log(num === max);
      num === max ? clearInterval(handleNum) : printCaseNum(max, num + 1);
      now -= step;
    }, time);
  };

  const printCaseNum = (max, num) => {
    switch (max) {
      case 350:
        setUserCount(num);
        break;
      case 21:
        setReviewCount(num);
        break;
      case 650:
        setSaveCount(num);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <ListText>
        <strong>{userCount}만 명</strong>의 사용자
      </ListText>
      <ListText>
        <strong>{reviewCount}만 개</strong>의 리뷰
      </ListText>
      <ListText>
        <strong>{saveCount}만 개</strong>의 저장
      </ListText>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const ListText = styled.span`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`;

export default CountList;
