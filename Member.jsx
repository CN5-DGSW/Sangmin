import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import './Member.css';
import poingLogo from "../src/img/poingLogo.svg";
import axios from 'axios';

const Login = () => {
  const Navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [classValue, setClassValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const register = async () => {
    try {
      const response = await axios.post('보내 줄 서버', {
        '이름': nameValue,
        '비번': pwValue,
        '학반번호': classValue,
        '이메일': emailValue,
      });
      
      if (response.status === 200) {
        alert('회원가입이 성공적으로 완료되었습니다.');
        Navigate('../');
      } else {
        alert('회원가입에 실패했습니다. 정보를 다시 한번 확인해주세요.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
            type='text'
            placeholder='이메일을 입력하세요.'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <button className='MemberBtn Yellow' onClick={register}>
          회원가입
        </button>
      </div>
    </>
  );
};

export default Login;
