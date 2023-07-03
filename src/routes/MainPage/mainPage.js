import React from "react";
import Header from "../../components/Header";
import styles from "./mainPage.module.css";
import picture from "../../image/main_picture.jpg";
import meetAhpuh from "../../image/meetAhpuh.jpg";
import Footer from "./../../components/Footer";

function mainPage() {
    return (
        <>
            <div className={styles.viewport}>
                <div className={styles.contents}>
                    <Header />
                    <div className={styles.main_banner}>
                        <img className={styles.img} src={picture} />
                        <h1 className={styles.font}>
                            Let's
                            <br />
                            AhPuh!
                        </h1>
                        <button className={styles.btn}>
                            <a href="/location">서핑 시작하기</a>
                        </button>
                        <div className={styles.meet}>
                            <h1 className={styles.meetText}>
                                아푸에서 만나보세요
                            </h1>
                            <img className={styles.meetImg} src={meetAhpuh} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default mainPage;
