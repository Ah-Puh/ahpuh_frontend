import React from 'react';
import Header from '../../components/Header';
import styles from './LoginPage.module.css';
import picture from '../../image/main_picture.jpg';
import Footer from './../../components/Footer';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const loginComplete = () => {
    const id = "myUsername";
    const password = "myPassword";
    localStorage.setItem("id", id);
    localStorage.setItem("password", password);
    navigate(`/Signup_Success`);
  };

  const goToSignupPage = () => {
    navigate(`/Signup`);
  };

  return (
    <>
      <div className={styles.viewport}>
        <div className={styles.contents}>
          <Header />
          <img className={styles.img} src={picture} alt='Main Picture' />
          <div className={styles.login_container}>
          <h1 className={styles.login_title}>로그인</h1>
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
            <button className={styles.login_button} onClick={loginComplete}>로그인</button>
            <button className={styles.signup_button} onClick={goToSignupPage}>회원가입</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
