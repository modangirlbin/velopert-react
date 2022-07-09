import React, { useState } from 'react';
// 리액트 패키지에서 useState 라는 함수를 불러와줍니다.

function Counter(){
  const [number, setNumber] = useState(0);
  // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 이 함수를 호출해주면 배열이 반환되는데요, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다

  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  // Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정
  const onIncrese = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }
  return(
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrese}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;