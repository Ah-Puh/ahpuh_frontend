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

  const [Tutor, setTutor] = useState([]);

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
    const call = async () => {
      setDays(localStorage.getItem('days'));
      setPlace(localStorage.getItem('place'));

      const response = await axios.get('http://34.226.148.91/tutor', {
        params: {
          day: '2023-07-03',
          beach_id: 1,
        },
      });
      // console.log('data:', response.data.result);
      setTutor([...response.data.result]);
    };

    call();
  }, []);
  // console.log('tutor:', Tutor);

  const onSearchHandle = async () => {
    const response = await axios.get('http://34.226.148.91/tutor', {
      params: {
        day: '2023-07-03',
        beach_id: 1,
        time: selectedTime,
        level: selectedLevel,
      },
    });
    setTutor([...response.data.result]);
  };

  return (
    <div className={styles.viewport}>
      <Header />
      <div className={styles.contents}>
        <p className={styles.word}>
          <div className={styles.info}>망상 해수욕장 7월 3일</div>
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

        {/* 실제로 데이터 받아올 때 */}
        <Row gutter={[48, 60]}>
          {Tutor &&
            Tutor.map((tutor, index) => (
              <React.Fragment key={index}>
                <TutorCard
                  id={tutor.id}
                  image='https://www.amadosurfcamp.com/wp-content/uploads/2021/03/algarve-surf-school-portugal-amado.jpg'
                  level={tutor.levels[0]}
                  mbti='ENTJ'
                  personal={tutor.tags[0]}
                  verifi={tutor.tags[1]}
                  name={tutor.name}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default TutorPage;
