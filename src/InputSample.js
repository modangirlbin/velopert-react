import React, { useState, useRef } from 'react';

function InputSample() {
  const [input, setInput] = useState(
    {
      name:'',
      nickname:''
    }
  );

  const {name, nickname} = input;
  //name(input name값) ='', nickname=''

  const resetFocus = useRef();

  const onChange = (e) => {
    const {name, value} = e.target;
    //name(target의 key)=...., value=....

    setInput({
      ...input,
      [name] : value
    })
  }

  const onReset = () => {
    setInput({
      name: '',
      nickname: ''
    })
    resetFocus.current.focus();
  }
  
  return (
    <div>
      <input name='name' value={name} placeholder='이름' onChange={onChange} ref={resetFocus}/>
      <input name='nickname' value={nickname} placeholder='닉네임'onChange={onChange}/>
      <button onClick={onReset}>초기화</button>
      <div><b>값</b>{name}({nickname})</div>
    </div>
  );
}

export default InputSample;

// input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요합니다. 그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트 됩니다.