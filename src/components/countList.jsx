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
    const maxNumArr = [350, 21, 650]; // 목표 숫자 배열
    const timeSec = 2; // 애니메이션 증가 목표 시간 : 2초

    maxNumArr.forEach((max) => {
      increaseNum(max, timeSec);
    });
  };

  // 숫자 증가 애니메이션 함수
  const increaseNum = (max, timeSec) => {
    let now = 0;

    // 0.05초 간격으로 증가 함수 실행
    const handleNum = setInterval(() => {
      now += max / (20 * timeSec);
      const num = Math.floor(now);
      printCaseNum(max, num);

      // num이 max보다 커지면 함수 취소
      if (num >= max) {
        clearInterval(handleNum);
      }
    }, 50);
  };

  // max의 값을 case로 분류 후 state 변경
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
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`;

export default CountList;
