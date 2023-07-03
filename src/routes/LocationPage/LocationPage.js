import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Hedaer from "../../components/Header.js";
import "./LocationPage.css";
import logo from "../../image/search_icon.png";
import Footer from "../../components/Footer.js";

function LocationPage() {
    const [searchValue, setSearchValue] = useState("");
    const [cardData, setCardData] = useState([
        {
            id: 1,
            name: "제주도",
        },
        {
            id: 2,
            name: "강원도",
        },
        {
            id: 3,
            name: "부산",
        },
        {
            id: 4,
            name: "망상",
        },
        {
            id: 5,
            name: "만리포",
        },
        {
            id: 6,
            name: "죽도",
        },
    ]);
    const navigate = useNavigate();

    // 카드 선택 시 날짜 선택 페이지로 이동
    const goToDayPage = (locationId) => {
        navigate(`/days/${locationId}`);
    };

    // 서버에서 검색결과 데이터를 받아오는 함수
    const fetchResult = async () => {
        try {
            const response = await axios.get(
                `http://54.145.149.194/beach?keyword=${searchValue}`
            );
            console.log(response.data.result);
            setCardData(response.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    // 처음에 서버에서 전체 데이터를 받아오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://54.145.149.194/beach`);
            setCardData(response.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 검색 버튼 클릭 시
    const handleClick = () => {
        console.log("검색어:", searchValue);

        // 검색어가 비어있지 않은 경우에만 요청 보내기
        if (searchValue.trim() !== "") {
            fetchResult();
        }
    };

    // 검색어 입력 후 엔터키 입력 시
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    // 검색어 입력 시
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="main">
            <Hedaer></Hedaer>
            <div className="wrap">
                <div className="contaier">
                    <div className="title">
                        <h1>어디로 떠나시나요?</h1>
                    </div>
                    <div className="search">
                        <input
                            className="search_input"
                            type="text"
                            placeholder="여행 장소를 검색해주세요."
                            value={searchValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="search_btn" onClick={handleClick}>
                            <img
                                src={logo}
                                alt="logo"
                                className="logo"
                                style={{ width: "20px", height: "23px" }}
                            />
                        </button>
                    </div>
                    <div className="card_section">
                        {cardData.map((card) => (
                            <div
                                key={card.id}
                                className="card"
                                style={{
                                    backgroundImage: `url(/location_${card.id}.jpeg)`,
                                    backgroundSize: "cover",
                                }}
                                onClick={() => goToDayPage(card.id)}
                            >
                                <div className="card_name">{card.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default LocationPage;
