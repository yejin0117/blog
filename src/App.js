import React from "react";
import styled from "styled-components";

const steps = ["이력서 양식", "신상 정보", "경력", "수정", "완성"];

function App() {

  let [pName, pNameChange] = useState(['남자 코트 추천','안양 우동맛집','리액트 독학']);
  let [thumbsUp, thumbsUpChange] = useState(0);
  let posts
/*
  function titleChange(){
    //글제목에 있던 1번째 데이터를 여자코트추천으로 바꿈 !!deep copy복사본 생성!! state가 array,object일때!
    // var newArray = pName; <--이건 값 공유. 복사 아님
    var newArray = [...pName]; //서로 독립적인 값을 가지는 복사
    newArray[0] = '여자코트 추천';
    pNameChange( newArray );
    // pNameChange(['여자코트 추천', '안양 우동맛집집','리액트 독학']);
  }*/

export default function ResumeStepIndicator({ currentStep = 0 }) {
  return (
    <Container>
      <Title>이력서 양식 선택</Title>

      <Stepper>
        {steps.map((step, index) => (
          <Step key={step}>
            <Circle active={index <= currentStep}>{index + 1}</Circle>
            <Label>{step}</Label>
            {index < steps.length - 1 && <Line />}
          </Step>
        ))}
      </Stepper>

      <Section>
        <h2>이력서 양식 예시</h2>
        <TemplateGrid>
          <Template />
          <Template />
          <Template />
          <TemplateAdd>+</TemplateAdd>
        </TemplateGrid>
      </Section>

      <Section>
        <h2>최근 사용</h2>
        <TemplateGrid>
          <Template />
          <Template />
          <Template />
        </TemplateGrid>
      </Section>

      <Footer>
        13916 경기도 안양시 동안구 임곡로 29 대림대학교 | 대표전화: 031-467-4700<br />
        Copyright 학사뉴 ALL RIGHTS RESERVED
      </Footer>
    </Container>
  );
}

// styled-components 정의
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #cce0ff, white);
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Stepper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#007bff' : '#ccc')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Label = styled.span`
  white-space: nowrap;
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #aaa;
`;

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: left;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const TemplateGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Template = styled.div`
  width: 120px;
  height: 160px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TemplateAdd = styled(Template)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #aaa;
  border: 2px dashed #ccc;
`;

const Footer = styled.footer`
  font-size: 0.8rem;
  color: #555;
  margin-top: 3rem;
`;
