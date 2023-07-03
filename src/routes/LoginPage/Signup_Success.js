import React from 'react';
import Header from '../../components/Header';
import './Signup_Success.css';
import picture from '../../image/main_picture.jpg';
import Footer from './../../components/Footer';
import check from '../../image/check.png';

function SignupPage() {
    return (
        <>
            <div className='viewport'>
                <div className='contents'>
                    <Header />
                    <img className='img' src={picture} alt='Main Picture' />
                    <div className='login-container'>
                        <h1 className='login-title'>회원가입</h1>
                        <img className='check' src={check}/>
                        <button className='login-button'>로그인 하러가기</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SignupPage;
