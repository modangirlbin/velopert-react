import React, { useState, useRef } from 'react';

function InputSample(){
  const [input, changeInput]= useState({
    name: '',
    nickname: ''
  })
  
  const {name, nickname} = input;
  const resetFocus = useRef();

  const setInput=(e) => {
    const {name, value} = e.target;

    changeInput({
      ...input,
      [name] : value
    })
  }

  const resetInput = () => {
    changeInput({
      name: '',
      nickname: ''
    })
    resetFocus.current.focus();
  }
  return(
    <div>
      <input 
        name="name" 
        value={name} 
        onChange={setInput}
        placeholder="이름" 
        ref={resetFocus}
      />
      <input 
        name="nickname" 
        value={nickname} 
        onChange={setInput} 
        placeholder="닉네임" 
      />
      <button 
        onClick={resetInput}
      >초기화</button>
      <b>값 :</b> {name}({nickname})
    </div>
  )
}
export default InputSample;