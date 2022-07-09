import React from 'react';

// function Hello(props){
//   return <div style={{color:props.color}}>hi {props.name}</div>
// }

// export default Hello;

//비구조화 할당
function Hello({color, name, isSpecial}){
  return (
    <div style={{color}}>
      {isSpecial && <b>*</b>}
      hi {name}
    </div>
  )
}
// isSpecial 값이 true 라면 <b>*</b> 를, 그렇지 않다면 null 을 보여주도록 했습니다. 참고로 JSX 에서 null, false, undefined 를 렌더링하게 된다면 아무것도 나타나지 않게 됩니다.
export default Hello;