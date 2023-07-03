import React from 'react';
import Header from '../../components/Header';
import './mainPage.css';

function mainPage() {
  return (
    <>
      <div className='viewport'>
        <div className='contents'>
          <Header />
          <div className='main-banner'>
            <h1>
              Let's
              <br />
              AhPuh!
            </h1>
            <button>서핑 시작하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default mainPage;
