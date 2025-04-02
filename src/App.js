/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

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

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'gray', fontSize:"30px"}}>
          <img src={logo} width={30}/>
          개발 Blog
        </div>
      </div>
      {/*<button onClick={ titleChange }>버튼</button>*/}
      <div className="list">
        <h4> { pName[0] } <span onClick={ ()=>{ thumbsUpChange(thumbsUp+1) } }>👍</span> {thumbsUp} </h4>
        <p>3월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { pName[1] } </h4>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { pName[2] } </h4>
        <p>3월 23일 발행</p>
      </div>

      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
