import React from 'react';
import Header from '../../components/Header';
import './LoginPage.css';
import picture from '../../image/main_picture.jpg';
import Footer from './../../components/Footer';

function LoginPage() {
  return (
    <>
      <div className='viewport'>
        <div className='contents'>
          <Header />
            <img className='img' src={picture} alt='Main Picture' />
          <div className='login-container'>
            <h1 className='login-title'>로그인</h1>
            <div className='input-container'>
              <input
                className='input-field'
                type='text'
                placeholder='ID'
              />
            </div>
            <div className='input-container'>
              <input
                className='input-field'
                type='password'
                placeholder='PASSWORD'
              />
            </div>
            <button className='login-button'>로그인</button>
            <button className='signup-button'>회원가입</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
