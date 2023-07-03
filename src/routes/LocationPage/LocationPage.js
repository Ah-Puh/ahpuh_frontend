import React, { useState } from "react";
import Hedaer from "../../components/Header.js";
import "./LocationPage.css";
import logo from "../../image/search_icon.png";

function LocationPage() {
    const [searchValue, setSearchValue] = useState("");
    const [cardData, setCardData] = useState([
        "카드 1",
        "카드 2",
        "카드 3",
        "카드 4",
        "카드 5",
        "카드 6",
        "카드 7",
        "카드 8",
        "카드 9",
        "카드 10",
    ]);

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
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    backgroundImage: `url(/location_${
                                        index + 1
                                    }.jpeg)`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <h1>{card}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPage;
