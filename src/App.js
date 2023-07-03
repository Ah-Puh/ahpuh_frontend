import React from "react";
import { Route, Routes } from "react-router-dom";
import DayPage from "./routes/DayPage/DayPage";
import mainPage from "./routes/MainPage/mainPage";
import LocationPage from "./routes/LocationPage/LocationPage";
import TutorPage from "./routes/TutorPage/TutorPage";
import TutorDetailPage from "./routes/TutorDetailPage/TutorDetailPage";
import LoginPage from "./routes/LoginPage/LoginPage";

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
                <Route exact path="/Login" element={LoginPage()} />
            </Routes>
        </div>
    );
}

export default App;
