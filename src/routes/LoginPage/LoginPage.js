import React from 'react';
import Header from '../../components/Header';
import styles from './LoginPage.module.css';
import picture from '../../image/main_picture.jpg';
import Footer from './../../components/Footer';

function LoginPage() {
  return (
    <>
      <div className={styles.viewport}>
        <div className={styles.contents}>
          <Header />
          <img className={styles.img} src={picture} alt='Main Picture' />
          <div className={styles.login_container}>
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
            <button className={styles.login_button}>로그인</button>
            <button className={styles.signup_button}>회원가입</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
