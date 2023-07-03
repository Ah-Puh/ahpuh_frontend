import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './BookPage.module.css';
import Hedaer from '../../components/Header.js';
import tutor_image from '../../image/tutor_image.png';
import Footer from '../../components/Footer';

function BookPage() {
  const [classIntro, setClassIntro] = useState('');
  const [classAddress, setClassAddress] = useState('');
  const [classTime, setClassTime] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate(`/mypage`);
  };

  useEffect(() => {
    // localStorage에서 데이터를 가져오는 함수
    const fetchLocalStorageData = () => {
      const intro = localStorage.getItem('classIntro');
      const address = localStorage.getItem('classAddress');
      const time = localStorage.getItem('classTime');
      const number = localStorage.getItem('classNumber');

      setClassIntro(intro);
      setClassAddress(address);
      setClassTime(time);
      setClassNumber(number);
    };

    fetchLocalStorageData();
  }, []);

  return (
    <div>
      <Hedaer></Hedaer>
      <div className='main'>
        <img className='tutor_img' src={tutor_image} />
        <h1
          style={{
            fontSize: '20px',
            fontWeight: '700',
            marginTop: '30px',
          }}
        >
          예약되었습니다
        </h1>
        <h1
          className='class_intro'
          style={{
            fontSize: '16px',
            fontWeight: '700',
            marginTop: '30px',
          }}
        >
          {classIntro}
        </h1>
        <h1
          className='class_address'
          style={{ fontSize: '14px', marginTop: '10px' }}
        >
          {classAddress}
        </h1>
        <h1
          className='class_time'
          style={{ fontSize: '16px', marginTop: '30px' }}
        >
          {classTime}
        </h1>
        <h1
          className='class_number'
          style={{ fontSize: '16px', marginTop: '10px' }}
        >
          {classNumber}
        </h1>
        <button
          className='mypage_btn'
          onClick={() => {
            goToMyPage();
          }}
        >
          <h1
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#68A1A4',
            }}
          >
            예약내역 확인하기
          </h1>
        </button>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default BookPage;
