import React from 'react';
import Header from '../../components/Header';
import './mainPage.css';
import picture from '../../image/main_picture.jpg'
import meetAhpuh from '../../image/meetAhpuh.jpg'
import Footer from './../../components/Footer';

function mainPage() {
  return (
    <>
      <div className='viewport'>
        <div className='contents'>
          <Header />
          <div className='main-banner'>
            <img className='img' src = {picture}/>
            <h1 className='font'>
              Let's
              <br />
              AhPuh!
            </h1>
            <button className='btn'>서핑 시작하기</button>
            <div className='meet'>
            <h1 className='meetText'>아푸에서 만나보세요</h1>
            <img className='meetImg' src = {meetAhpuh}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default mainPage;
