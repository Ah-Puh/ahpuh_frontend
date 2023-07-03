import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hedaer from "../../components/Header.js";
import tutor_image from "../../image/tutor_image.png";
import Footer from "../../components/Footer";

function BookPage() {
    const [classIntro, setClassIntro] = useState("");
    const [classAddress, setClassAddress] = useState("");
    const [classTime, setClassTime] = useState("");
    const [classNumber, setClassNumber] = useState("");
    const navigate = useNavigate();

    const goToMyPage = () => {
        navigate(`/mypage`);
    };

    useEffect(() => {
        // localStorage에서 데이터를 가져오는 함수
        const fetchLocalStorageData = () => {
            const intro = localStorage.getItem("classIntro");
            const address = localStorage.getItem("classAddress");
            const time = localStorage.getItem("classTime");
            const number = localStorage.getItem("classNumber");

            setClassIntro(intro);
            setClassAddress(address);
            setClassTime(time);
            setClassNumber(number);
        };

        fetchLocalStorageData();
    }, []);

    return (
        <div>
            <Hedaer></Hedaer>
            <div className="main">
                <img
                    className="tutor_img"
                    src={tutor_image}
                    style={{ marginTop: "50px" }}
                />
                <h1
                    style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginTop: "30px",
                    }}
                >
                    예약되었습니다
                </h1>
                <h1
                    className="class_intro"
                    style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        marginTop: "30px",
                    }}
                >
                    서핑에 진심인 15년 경력 서핑 강사
                </h1>
                <h1
                    className="class_address"
                    style={{ fontSize: "14px", marginTop: "10px" }}
                >
                    강원도 양양시 해변로25길 10 서퍼살롱
                </h1>
                <h1
                    className="class_time"
                    style={{ fontSize: "16px", marginTop: "30px" }}
                >
                    오전 10시
                </h1>
                <h1
                    className="class_number"
                    style={{ fontSize: "16px", marginTop: "10px" }}
                >
                    3명
                </h1>
                <button
                    className="mypage_btn"
                    style={{ backgroundColor: "white", border: "none" }}
                    onClick={() => {
                        goToMyPage();
                    }}
                >
                    <h1
                        style={{
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#68A1A4",
                            marginTop: "50px",
                            marginBottom: "50px"
                        }}
                    >
                        예약내역 확인하기
                    </h1>
                </button>

                <Footer></Footer>
            </div>
        </div>
    );
}

export default BookPage;
