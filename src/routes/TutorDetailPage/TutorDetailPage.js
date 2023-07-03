import React from "react";
import Header from "../../components/Header";
import Footer from "./../../components/Footer";
import styles from "./TutorDetailPage.module.css";

function TutorDetailPage() {
    return (
        <div className={styles.parernt}>
            <Header />
            <div className={styles.anotherTutor}>&lt; 다른 강사 둘러보기</div>
            <div className={styles.ninetypercent}>
                <div className={styles.right}>
                    <img
                        className={styles.tutor}
                        src="https://www.amadosurfcamp.com/wp-content/uploads/2021/03/algarve-surf-school-portugal-amado.jpg"
                    ></img>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            서핑에 진심인 15년 경력 서핑 강사
                        </div>
                        <div className={styles.contents}>
                            {" "}
                            안녕하세요. 😎 물치해변 바로 앞에 위치한
                            서프살롱에서는 최고의 장비가 준비되어 있으며 안전
                            교육 및 서핑에 필요한 모든 교육을 진행해 드립니다.
                            파도가 무서워도, 서핑이 처음이어도 모두 금방 적응할
                            수 있을 거에요. 15년 경력으로 초보자들도 어렵지 않게
                            서핑을 즐길 수 있어요. 물이 무섭거나 수영을 못하는
                            분도 두려움을 깨고 보다 안전하고 즐겁게 서핑을
                            시작할 수 있도록 도와드립니다. 아름다운 바다를
                            배경으로 인생샷도 촬영해드려요. 함께 양양에서 좋은
                            추억 만들어봐요!
                        </div>
                        <div className={styles.hash}>
                            <div className={styles.spacer}>
                                #국제서핑협회 ISA 강사 자격증
                            </div>{" "}
                            <div className={styles.spacer}>
                                #수상인명구조원 자격증
                            </div>{" "}
                            <div className={styles.spacer}>#ENFP</div>{" "}
                            <div>#열정</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.right}>
                    <div className={styles.subTitle}>주소 안내</div>
                    <div className={styles.subContents}>
                        강원도 양양시 해변로25길 10 서퍼살롱
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
                        <option value="option1">AM 10:00</option>
                        <option value="option2">PM 1:00</option>
                        <option value="option3">PM 5:00</option>
                    </select>
                    <div className={styles.subContents}>
                        &nbsp;&nbsp;&nbsp;약 2시간 소요
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.subTitle}>인원</div>
                    <select className={styles.subTitle}>
                        <option value="option1">1명</option>
                        <option value="option2">2명</option>
                        <option value="option3">3명</option>
                        <option value="option4">4명</option>
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
                <div className={styles.reserv}>₩ 51,000</div>
                <button className={styles.reservBtn}>
                    <a href="/book">바로 예약</a>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default TutorDetailPage;
