import React from 'react';
import './Header.css';
// import logo from '../logo/logo_symbol.png';

function Header(props) {
  const onLoginHandler = (e) => {
    e.preventDefault();
    console.log('login');
  };

  return (
    <>
      <div className='header'>
        <div className='left-group'>
          <div className='left-item'>
            <a href='/'>
              <img src='' alt='logo' className='logo' />
            </a>
          </div>
          <div className='left-item'>
            <a href='#'>서핑하러 가기</a>
          </div>
          <div className='left-item'>
            <a href='#'>서비스 소개</a>
          </div>
        </div>

        <button className='login-btn' onClick={onLoginHandler}>
          로그인
        </button>
      </div>
    </>
  );
}

export default Header;
