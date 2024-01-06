import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../Member/Member';
import poingLogo from "../src/img/poingLogo.svg";
import '../Teacher/Teacher';
import axios from 'axios';

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const Navigate = useNavigate();

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`로그인정보 확인하는 서버`);
      console.log(response.data); // 정보 출력
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post('내가 보내줄 서버', {
        email: emailValue,
        password: pwValue
      });
      if (response.status === 200) {
        fetchUserInfo(); // 로그인 될 때 사용자 정보
        Navigate("/Teacher");
      } else {
        alert('로그인 정보가 일치하지 않습니다.')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='MainLayout'>
      <img src={poingLogo} alt="Poing Logo" />
      <p className='Yellow sendToTeacher'>선생님께 마음을 전할 준비가 되었나요?</p>
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
      <button className='LoginBtn Yellow' onClick={login}>
        로그인
      </button>
      <div>
        <p className='Yellow Under' onClick={() => {Navigate("/member")}}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default Login;
