import React, { useEffect, useRef } from 'react';
import { Col } from 'antd';
import styles from './TutorCard.module.css';

function TutorCard(props) {
  const levelInfo = useRef();

  useEffect(() => {
    if (props.level === '초급') {
      levelInfo.current.style.background = '#EFDA91';
    } else if (props.level === '중급') {
      levelInfo.current.style.background = '#C5DCA8';
    } else if (props.level === '상급') {
      levelInfo.current.style.background = '#FF739D';
    }
  }, []);

  return (
    <Col lg={8} md={12} xs={24}>
      <div style={{ position: 'relative' }}>
        <a href={`/tutordetail/:${props.id}`} className={styles.card}>
          <div className={styles.row}>
            <img
              style={{ width: '70%', height: '320px', marginRight: '12px' }}
              src={props.image}
              alt={props.name}
              className={styles.row_img}
            />

            <div className={styles.row_info}>
              <div className={styles.block_group}>
                <div className={styles.info_block} ref={levelInfo}>
                  # {props.level}
                </div>
                <div className={styles.info_block}># {props.mbti}</div>
                <div className={styles.info_block}># {props.personal}</div>
                {props.verifi ? (
                  <div className={styles.info_block}># 자격증</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={styles.tutor_name}>{props.name}</div>
        </a>
      </div>
    </Col>
  );
}

export default TutorCard;
