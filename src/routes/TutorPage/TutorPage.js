import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/Header';
import styles from './TutorPage.module.css';
import { Row } from 'antd';
import TutorCard from './TutorCard';
import axios from 'axios';
import Footer from '../../components/Footer';

function TutorPage() {
  const [days, setDays] = useState(null);
  const [place, setPlace] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const [Tutors, setTutors] = useState([
    1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 1, 1,
  ]);

  const [Tutor, setTutor] = useState([
    {
      id: 1,
      image: '',
      level: '초급',
      mbti: 'ESTP',
      personal: '열정',
      verifi: true,
      name: '서퍼살롱',
    },
  ]);

  const timeRef = useRef();
  const onTimeClickHandler = (e) => {
    setSelectedTime(e.currentTarget.textContent);
    toggleTimeVisibility();
    if (selectedTime !== null) {
      timeRef.current.textContent = selectedTime;
    }

    console.log(selectedTime);
  };

  const levelRef = useRef();
  const onLevelClickHandler = (e) => {
    setSelectedLevel(e.currentTarget.textContent);
    toggleLevelVisibility();
    if (selectedLevel !== null) {
      levelRef.current.textContent = selectedLevel;
    }

    console.log(selectedLevel);
  };

  const [isTimeHidden, setIsTimeHidden] = useState(true);
  const toggleTimeVisibility = () => {
    setIsTimeHidden(!isTimeHidden);
  };
  const [isLevelHidden, setIsLevelHidden] = useState(true);
  const toggleLevelVisibility = () => {
    setIsLevelHidden(!isLevelHidden);
  };

  useEffect(() => {
    setDays(localStorage.getItem('days'));
    setPlace(localStorage.getItem('place'));

    // const response = axios.get('/tutor', {
    //   params: {
    //     days: days,
    //     place: place,
    //   },
    // });
    // setTutor([...response.results]);
  }, []);

  const onSearchHandle = () => {
    const response = axios.get('/tutor', {
      params: {
        days: days,
        place: place,
        time: selectedTime,
        level: selectedLevel,
      },
    });
  };

  return (
    <div className={styles.viewport}>
      <Header />
      <div className={styles.contents}>
        <p className={styles.word}>
          <div className={styles.info}>망상 해수욕장 7월 17일</div>
          <br />
          <div className={styles.info_word}>원하는 강사를 만나 보세요</div>
        </p>

        <div className={styles.btn_group}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <button
              className={styles.btn_time}
              onClick={toggleTimeVisibility}
              ref={timeRef}
            >
              시간대 ▽
            </button>
            {!isTimeHidden && (
              <div className={styles.times}>
                <button onClick={onTimeClickHandler}>00</button>
                <button onClick={onTimeClickHandler}>02</button>
                <button onClick={onTimeClickHandler}>04</button>
                <button onClick={onTimeClickHandler}>06</button>
                <button onClick={onTimeClickHandler}>08</button>
                <button onClick={onTimeClickHandler}>10</button>
                <button onClick={onTimeClickHandler}>12</button>
                <button onClick={onTimeClickHandler}>14</button>
                <button onClick={onTimeClickHandler}>16</button>
                <button onClick={onTimeClickHandler}>18</button>
                <button onClick={onTimeClickHandler}>20</button>
                <button onClick={onTimeClickHandler}>22</button>
              </div>
            )}
          </div>

          <button
            className={styles.btn_level}
            onClick={toggleLevelVisibility}
            ref={levelRef}
          >
            난이도 ▽
          </button>
          {!isLevelHidden && (
            <div className={styles.levels}>
              <button onClick={onLevelClickHandler}>초급</button>
              <button onClick={onLevelClickHandler}>중급</button>
              <button onClick={onLevelClickHandler}>상급</button>
            </div>
          )}
          <button className={styles.tutorsearch} onClick={onSearchHandle}>
            검색
          </button>
        </div>

        <hr />

        {/* tutors */}

        <Row gutter={[48, 60]}>
          {Tutors &&
            Tutors.map((tutor, index) => (
              <React.Fragment key={index}>
                <TutorCard
                  id='1'
                  image='https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000'
                  level='초급'
                  mbti='ESTP'
                  personal='열정'
                  verifi={true}
                  name='서퍼 살롱'
                />
              </React.Fragment>
            ))}
        </Row>

        {/* 실제로 데이터 받아올 때 */}
        {/* <Row gutter={[48, 60]}>
          {Tutor &&
            Tutor.map((tutor, index) => (
              <React.Fragment key={index}>
                <TutorCard
                  image={tutor.image}
                  level={tutor.level}
                  mbti={tutor.mbti}
                  personal={tutor.personal}
                  verifi={tutor.verifi}
                  name={tutor.name}
                />
              </React.Fragment>
            ))}
        </Row> */}
      </div>
      <Footer />
    </div>
  );
}

export default TutorPage;
