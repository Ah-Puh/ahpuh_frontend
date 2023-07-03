import React, { useState, useEffect } from "react";
import axios from "axios";
import Hedaer from "../../components/Header.js";
import "./LocationPage.css";
import logo from "../../image/search_icon.png";

function LocationPage() {
    const [searchValue, setSearchValue] = useState("");
    const [cardData, setCardData] = useState([]);

    const handleClick = () => {
        alert("버튼이 클릭되었습니다!");
        console.log("검색어:", searchValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        // 서버에서 데이터를 받아오는 함수
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/beach?keyword=${searchValue}`
                );
                setCardData(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [searchValue]);

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
                            <img src={logo} alt="logo" className="logo" />
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
                            >
                                <h1>{card.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPage;
