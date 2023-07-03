
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from './../../components/Footer';
import styles from './TutorDetailPage.module.css';
import axios from 'axios';

function TutorDetailPage() {
  const tutorId = localStorage.getItem('tutorId');
  const day = '2023-07-03';

  const [tutorInfo, setTutorInfo] = useState(null);

  useEffect(() => {
    const call = async () => {
      const response = await axios.get(
        `http://34.226.148.91/tutor/${tutorId}`,
        {
          params: {
            day: '2023-07-03',
          },
        }
      );
      setTutorInfo(response.data.result);
    };

    call();
  }, []);

  if (tutorInfo) {
    console.log(tutorInfo);
  }
  return (
    <div className={styles.parernt}>
      <Header />
      <div className={styles.anotherTutor}>
        <a href='/tutor'>&lt; 다른 강사 둘러보기</a>
      </div>

      <div className={styles.ninetypercent}>
        <div className={styles.right}>
          <img
            className={styles.tutor}
            src='https://images.unsplash.com/photo-1523606772308-64a28db0ef2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80.jpg'
          ></img>
          <div className={styles.left}>
            <div className={styles.title}>
              {tutorInfo ? tutorInfo.tutor[0].name : null}
            </div>
            <div className={styles.contents}>
              {tutorInfo ? tutorInfo.tutor[0].introduction : null}
            </div>
            <div className={styles.hash}>
              <div className={styles.spacer}>#국제서핑협회 ISA 강사 자격증</div>{' '}
              <div className={styles.spacer}>#수상인명구조원 자격증</div>{' '}
              <div className={styles.spacer}>#ENFP</div> <div>#열정</div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.right}>
          <div className={styles.subTitle}>주소 안내</div>
          <div className={styles.subContents}>
            {tutorInfo ? tutorInfo.tutor[0].address : null}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.subTitle}>난이도</div>
          <div className={styles.level_1}>초급</div>
          <div className={styles.level_2}>중급</div>
        </div>
        <div className={styles.right}>
          <div className={styles.subTitle}>시간대</div>
          <select className={styles.subTitle}>
            <option value='option1'>AM 10:00</option>
            <option value='option2'>PM 1:00</option>
            <option value='option3'>PM 5:00</option>
          </select>
          <div className={styles.subContents}>
            &nbsp;&nbsp;&nbsp;약 2시간 소요
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.subTitle}>인원</div>
          <select className={styles.subTitle}>
            <option value='option1'>1명</option>
            <option value='option2'>2명</option>
            <option value='option3'>3명</option>
            <option value='option4'>4명</option>
          </select>
        </div>
        <div className={styles.right}>
          <div className={styles.subTitle}>포함 서비스</div>
          <div className={styles.leftli}>
            <li>슈트 대여</li>
            <li>샤워</li>
            <li>샤워용품</li>
            <li>사진 촬영</li>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.subTitle}>예약 시 주의사항</div>
          <div className={styles.subContents}>
            <div className={styles.title}>취소/환불 규정</div>
            <div className={styles.contents}>
              72시간 전 무료 취소 가능합니다
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leftTotal}>
        <div className={styles.reserv}>
          ₩ {tutorInfo ? tutorInfo.lectures[0].price : null}
        </div>
        <button className={styles.reservBtn}>바로 예약</button>
      </div>
      <Footer />
    </div>
  );

}

export default TutorDetailPage;
