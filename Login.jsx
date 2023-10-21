import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';
import poingLogo from "../src/img/poingLogo.svg";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const onClickHandler = () => {
    console.log("Id : " + emailValue, "Password : " + pwValue);
  };

  return (
    <div className='MainLayout'>
      <img src={poingLogo} alt="Poing Logo" />
      <p className='Yellow sendToTeacher'>선생님께 마음을 전할 준비가 됐나요?</p>
      <div className='InputWrap'>
        <input
          className='Input'
          type='text'
          placeholder='이메일을 입력하세요.'
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div className='InputWrap'>
        <input
          className='Input'
          type='password'
          placeholder='비밀번호를 입력하세요.'
          value={pwValue}
          onChange={(e) => setPwValue(e.target.value)}
        />
      </div>
      <button className='LoginBtn Yellow' onClick={onClickHandler}>
        로그인
      </button>
      <div>
        <p className='Yellow Under' onClick={() => Navigate("/Member")}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default Login;
