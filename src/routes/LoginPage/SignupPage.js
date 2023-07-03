import React from 'react';
import Header from '../../components/Header';
import styles from './LoginPage.module.css';
import picture from '../../image/main_picture.jpg';
import Footer from './../../components/Footer';

function SignupPage() {
  return (
    <>
      <div className='viewport'>
        <div className='contents'>
          <Header />
          <img className={styles.img} src={picture} />
          <div className={styles.login_container}>
            <h1 className={styles.login_title}>회원가입</h1>
            <div className={styles.input_container}>
              <input
                className={styles.input_field}
                type='text'
                placeholder='ID'
              />
            </div>
            <div className={styles.input_container}>
              <input
                className={styles.input_field}
                type='password'
                placeholder='PASSWORD'
              />
            </div>
            <button className={styles.login_button}>회원가입</button>
            <button className={styles.signup_button}>로그인</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignupPage;
