import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import poingLogoTeacer from "../src/img/poingLogo.svg";
import './Teacher.css';
import profile from '../src/img/Vector.svg'

const Teacher = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div>
        <div className='image'>
          <div className='image2'>
            <img className='poingLogo' src={poingLogoTeacer} alt="Poing Logo"/>
            <img className='profileUser' src={profile} alte="user Proflie" />
          </div>
        </div>
        <p className='Yellow Teacher'>교장/교감</p>
        <div className='container'>
          <p className='Head box'>박유현</p>
          <p className='Head box'>오지석</p>
        </div>
        <div>
          <p className='Yellow ClassTeacher'>1학년 담임</p>
          <div className='container'>
            <p className='Head box'>김창대(정보)</p>
            <p className='Head box'>윤성원(체육)</p>
            <p className='Head box'>이진주(정보)</p> 
            <p className='Head box'>조현아(정보)</p>  
          </div>
        </div>
        <div>
          <p className='Yellow ClassTeacher'>2학년 담임</p>
          <div className='container'>
            <p className='Head box'>권헌춘(정보)</p>
            <p className='Head box'>김지영(정보)</p>
            <p className='Head box'>박효정(정보)</p> 
            <p className='Head box'>선은경(정보)</p>  
          </div>
        </div>
        <div>
          <p className='Yellow ClassTeacher'>3학년 담임</p>
          <div className='container'>
            <p className='Head box'>박재운(정보)</p>
            <p className='Head box'>여운주(정보)</p>
            <p className='Head box'>최두영(정보)</p> 
          </div>
        </div>
        <div>
          <p className='Yellow Teacher'>비담임</p>
          <div className='container'>
            <p className='Head box'>김정주(역사)</p>
            <p className='Head box'>정미숙(영어)</p>
            <p className='Head box'>박민지(지리)</p> 
            <p className='Head box'>최희숙(상담)</p> 
            <p className='Head box'>김익현(전공)</p> 
            <p className='Head box'>박소영(전공)</p> 
          </div>
          <div className='container'>
            <p className='Head box'>장정원(미술)</p>
            <p className='Head box'>하지영(보건)</p>
            <p className='Head box'>김화영(영양)</p> 
            <p className='Head box'>빈윤미(사서)</p> 
            <p className='Head box'>신민정(음악)</p> 
            <p className='Head box'>장봉성(정보)</p> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Teacher;