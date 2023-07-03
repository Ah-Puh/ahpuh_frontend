import React from "react";
import { Route, Routes } from "react-router-dom";
import DayPage from "./routes/DayPage/DayPage";
import mainPage from "./routes/MainPage/mainPage";
import LocationPage from "./routes/LocationPage/LocationPage";
import TutorPage from "./routes/TutorPage/TutorPage";
import TutorDetailPage from "./routes/TutorDetailPage/TutorDetailPage";
import BookPage from "./routes/BookPage/BookPage";
import MyPage from "./routes/MyPage/MyPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import SignupPage from "./routes/LoginPage/SignupPage";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={mainPage()} />
                <Route exact path="/location" element={LocationPage()} />
                <Route exact path="/days/:locationId" element={DayPage()} />
                <Route exact path="/tutor" element={TutorPage()} />
                <Route
                    exact
                    path="/tutordetail/:tutorId"
                    element={TutorDetailPage()}
                />
                <Route exact path="/book" element={BookPage()} />
                <Route exact path="/mypage" element={MyPage()} />
                <Route exact path="/Login" element={LoginPage()} />
                <Route exact path="/Signup" element={SignupPage()} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
