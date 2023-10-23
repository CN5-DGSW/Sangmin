import React, { useState } from 'react';
import './Member.css';
import poingLogo from "../src/img/poingLogo.svg";
import './Login'

const Login = () => {
  const [nameValue, setNameValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [classValue, setClassValue] = useState("");
  const [emailValue, setEmailValue] = useState("");


  const onClickHandler = () => {
    console.log("Id : " + emailValue, "Password : " + pwValue);
  };

  return (
    <div className='MainMember'>
      <img src={poingLogo} alt="Poing Logo" />
      <p className='Yellow sendToTeacher'>선생님께 마음을 전할 준비가 됐나요?</p>
      <div className='InputMember'>
        <input
          className='Input'
          type='text'
          placeholder='이름을 입력하세요.'
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div className='InputMember'>
        <input
          className='Input'
          type='password'
          placeholder='비밀번호를 입력하세요.'
          value={pwValue}
          onChange={(e) => setPwValue(e.target.value)}
        />
      </div>
      <div className='InputMember'>
        <input
          className='Input'
          type='text'
          placeholder='학년, 반, 번호을 입력하세요.   ex)1413'
          value={classValue}
          onChange={(e) => setClassValue(e.target.value)}
        />
      </div>
      <div className='InputMember'>
        <input
          className='Input'
          type='password'
          placeholder='이메일을 입력하세요.'
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <button className='MemberBtn Yellow' onClick={onClickHandler}>
        회원가입
      </button>
    </div>
  );
};

export default Login;
