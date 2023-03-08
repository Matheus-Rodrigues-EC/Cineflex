import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [id, setId] = useState(1);
    const [session, setSession] = useState();

    return (

        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>

            <Routes>
                <Route path="/" element={<HomePage   id={id} setId={setId} />} />
                <Route path={`/sessoes/${id}`} element={<SessionsPage id={id} session={session} setSession={setSession}  />} />
            </Routes>


        </BrowserRouter>

        
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
