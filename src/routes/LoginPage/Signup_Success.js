import React from 'react';
import Header from '../../components/Header';
import styles from './Signup_Success.module.css';
import picture from '../../image/main_picture.jpg';
import Footer from './../../components/Footer';
import check from '../../image/check.png';
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate(`/`);
      };

    return (
        <>
            <div className={styles.viewport}>
                <div className={styles.contents}>
                    <Header />
                    <img className={styles.img} src={picture} alt='Main Picture' />
                    <div className={styles.login_container}>
                        <h1 className={styles.login_title}>회원가입</h1>
                        <img className={styles.check} src={check}/>
                        <button className={styles.login_button} onClick={goToMainPage}>로그인 하러가기</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SignupPage;
